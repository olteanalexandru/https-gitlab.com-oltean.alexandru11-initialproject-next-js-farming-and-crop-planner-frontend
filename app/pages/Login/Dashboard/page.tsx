"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RotatieForm from '../../../Crud/RotatieForm';
import RotatieItem from '../../../Crud/RotatieItem';
import Spinner from '../../../Crud/Spinner';
import { Card, Container } from 'react-bootstrap';
import LinkParola from '../Elemente/page';
import LinkAdaugaPostare from '../Elemente/LinkAdaugaPostare';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';
import { UserInfos } from './userInfos';

export default function Dashboard() {
  const navigate = useRouter();
  const { data } = useGlobalContext();
  const { crops, isLoading, isError, message, getAllCrops } = useGlobalContextCrop();
  const { token } = data;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!data) {
      navigate.push('/login');
    }

    if (data.rol == 'agent') {
      getAllCrops();
    }
  }, [token, navigate, isError, message, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <UserInfos />
      {data && data.rol == 'agent' ? (
        <Container>
          <Card>
            <section className="heading">
              <h1>Salut {data.name}</h1>
              <LinkAdaugaPostare />
              <LinkParola />
              <p>Updateaza continutul paginii:</p>
            </section>
            <RotatieForm />

            <section className="content">
              {crops.length > 0 ? (
                <div className="crops">
                  {crops.map((crop) => (
                    <RotatieItem crop={crop}  />
                  ))}
                </div>
              ) : (
                <h3>Nu ai adaugat nici un continut pana acum</h3>
              )}
            </section>
          </Card>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
