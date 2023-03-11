// @ts-nocheck
"use client"
import {useEffect} from 'react'
import {useRouter} from 'next/navigation';
import RotatieForm from '../../Client/Crud/RotatieForm'
import RotatieItem from '../../Client/Crud/RotatieItem'
import Spinner from '../../Client/Crud/Spinner'
import {Card, Container} from 'react-bootstrap'
import LinkParola from '../Elemente/page'
import {useGlobalContext} from '../../../features/Context/UserStore';
import {useGlobalContextGoal} from '../../../features/Context/culturaStore';

function Dashboard() {
  const navigate = useRouter()

  const { data, setData, error, setError, loading, setLoading, register, login, logout } = useGlobalContext()
  const { goals, isLoading, isError, message, getGoals , getAllGoals } = useGlobalContextGoal()

  const { user } = data

  

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!data) {
      navigate.push('/login')
    }
    if (data.rol == "agent"){

      getAllGoals()

    return () => {
    } }
  }, [user, navigate, isError, message, data])

  if (isLoading) {
    return <Spinner />
  }

  if (data.rol == "agent"){
  return (
    <>
    <Container><Card>
      <section className='heading'>
        <h1>Salut {data && data.name}</h1>
        <LinkParola/>
        <p>Updateaza continutul paginii:</p>
      </section>

      <RotatieForm />

      
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <RotatieItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Nu ai adaugat nici un continut pana acum</h3>
        )}
      </section>
      </Card>

      </Container>
    </>
    
  )} else {

    return(
      <>
      <Container><Card>
        <section className='heading'>
          <h1>Salut {data && data.name}</h1>
          <LinkParola/>
          </section>
        </Card>
        
        </Container>
      </>
    )
  }
}

export default Dashboard