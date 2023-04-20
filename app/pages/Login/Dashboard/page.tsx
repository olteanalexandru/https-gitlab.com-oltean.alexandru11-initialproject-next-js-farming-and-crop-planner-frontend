"use client"
import { useEffect , useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Container } from 'react-bootstrap';
import {FaUser} from 'react-icons/fa'

import Link from 'next/link';
import RotatieForm from '../../../Crud/RotatieForm';
import RotatieItem from '../../../Crud/RotatieItem';
import Spinner from '../../../Crud/Spinner';
import LinkParola from '../Elemente/page';
import UserListItem from './UserListItem';
import LinkAdaugaPostare from '../Elemente/LinkAdaugaPostare';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';
import { UserInfos } from './userInfos';

export default function Dashboard() {
  const navigate = useRouter();
  const { crops, isLoading, isError, message, getCrops } = useGlobalContextCrop();
  const { fetchFermierUsers, deleteUser, data, loadingFermierUsers, fermierUsers } = useGlobalContext();
  const { token } = data;

  useEffect(() => {
    if (!data) {
      navigate.push('/login');
    }
  }, [navigate, data]);
  
  useEffect(() => {
    if (data && data.rol === 'Administrator' && !loadingFermierUsers && fermierUsers.length === 0) {
      fetchFermierUsers();
    }
  }, [data, fetchFermierUsers, loadingFermierUsers, fermierUsers]);
  
  
  useEffect(() => {
    if (data && data.rol === 'Fermier') {
      getCrops(data.token);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <UserInfos />
      {data && data.rol == 'Administrator' ? (
        <Container>
          <Card>
            <section className="heading">
              <h1>Salut {data.name}</h1>
              <LinkAdaugaPostare />
              <br />
              <br />
             
              <Link href='/pages/Login/Register'>
              <FaUser /> Adauga utilizatori
              </Link>
              <br />
              <br />
          

              <p>Gestioneaza utilizatorii</p>
              <div>
                <h2>Fermieri:</h2>
       
                {data && data.rol === 'Administrator' && (
  <ul>
    {fermierUsers &&
      fermierUsers.map((user) => (
        <UserListItem key={user._id} user={user} deleteUser={deleteUser} />
      ))}
  </ul>
)}


              </div>
            </section>
          </Card>
        </Container>
      ) : (
        data && data.rol == 'Fermier' ? (
          <Container>
            <Card>
              <section className="heading">
                <p>Adauga culturi:</p>
              </section>
              <RotatieForm />
  
              <section className="content">
                {crops.length > 0 ? (
                  <div className="crops">
<<<<<<< HEAD
                   
                      <RotatieItem crop={crops}  />
                  
=======
                    {crops.map((crop) => (
                      <RotatieItem crop={crop}  />
                    ))}
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
                  </div>
                ) : (
                  <h3>Nu ai adaugat culturi</h3>
                )}
              </section>
            </Card>
          </Container>
        ) : (
          <h1>Acces interzis</h1>
        )
      )}
    </>
  );
}
