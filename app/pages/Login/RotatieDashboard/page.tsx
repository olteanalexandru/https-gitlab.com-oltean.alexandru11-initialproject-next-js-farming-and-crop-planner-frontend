"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../../../Crud/Spinner';
import { Container, Card } from 'react-bootstrap';
import LinkParola from '../Elemente/page';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';
import Continut from '../../../Crud/GetAllInRotatie/page';

function RotatieDashboard() {
  const navigate = useRouter();

  const {
    crops,
    isLoading,
    isError,
    message,
    getAllCrops,
    cropRotation,
    getCropRotation,
  } = useGlobalContextCrop();
  const { data } = useGlobalContext();
  const { user } = data;
  const LocalUser = localStorage.getItem('user');
  const id = JSON.parse(LocalUser)._id;

  const [fieldSize, setFieldSize] = useState(0);
  const [numberOfDivisions, setNumberOfDivisions] = useState(0);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!data) {
      navigate.push('/login');
    }
    getAllCrops();

    return () => {};
  }, [user, navigate, isError, message, data]);

  useEffect(() => {
    if (fieldSize > 0 && numberOfDivisions > 0) {
      getCropRotation(fieldSize, numberOfDivisions, data.token);
    }
  }, [fieldSize, numberOfDivisions, data.token, getCropRotation]);

  if (isLoading) {
    return <Spinner />;
  }
  console.log(crops);

  if (data.rol == 'Fermier') {
    return (
      <>
        <Container>
          <Card>
            <section className='heading'>
              <h1>Salut {data && data.name}</h1>
            </section>
            <section className='content'>
              {crops.length > 0 ? (
                <div className='crops'>
                  <p>Ai selectat pentru rotatie:</p>

                  {crops.filter((crop) => crop.selectareBy === id).length == 0 ? (
                    <p>Nu ai selectat nici o cerere</p>
                  ) : (
                    crops
                      .filter((crop) => crop.selectare && crop.selectareBy == id)
                      .map((crop) => <Continut key={crop._id} crop={crop} />)
                  )}
                </div>
              ) : (
                <h3>Nici o selectie momentan</h3>
              )}

              {cropRotation.length > 0 && (
                <div className='rotation'>
                  <h3>Rotatia generata:</h3>
                  {cropRotation.map((rot, index) => (
                    <div key={index}>
                      <h4>Anul {index + 1}:</h4>
                      <ul>
                        {rot.map((crop) => (
                          <li key={crop._id}>{crop.cropName}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </Card>
          <LinkParola />
        </Container>
      </>
    );
  }
}

export default RotatieDashboard;
