// @ts-nocheck
"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux'
import RotatieForm from '../../Client/Crud/RotatieForm'
import RotatieItem from '../../Client/Crud/RotatieItem'
import Spinner from '../../Client/Crud/Spinner'
import { getGoals, reset } from '../../../features/goals/goalSlice'
import { Container , Card} from 'react-bootstrap'
import LinkParola from '../Elemente/page'
import { useGlobalContext } from '../../../features/Context/UserStore';

function Dashboard() {
  const navigate = useRouter()
  const dispatch = useDispatch()

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  const { data, setData, error, setError, loading, setLoading, register, login, logout } = useGlobalContext()

  const { user } = data


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate.push('/login')
    }
    if (user.rol == "agent"){

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    } }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  if (user.rol == "agent"){
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
          <h1>Salut {user && user.name}</h1>
          <LinkParola/>
          </section>
        </Card>
        
        </Container>
      </>
    )
  }
}

export default Dashboard