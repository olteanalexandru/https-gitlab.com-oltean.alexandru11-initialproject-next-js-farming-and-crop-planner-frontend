// @ts-nocheck
"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
// import { useSelector, useDispatch } from 'react-redux'
// import RotatieItem from '../../Client/Crud/RotatieItemInchirieri'
// import RotatieItemAdmin from '../../Client/Crud/RotatieItemInchirieriAdmin'
import Spinner from '../../Client/Crud/Spinner'
// import { getGoals, reset, getAllGoals} from '../../../features/goals/goalSlice'
import { Container , Card} from 'react-bootstrap'
import LinkParola from '../Elemente/page'
import { RootState } from '../../../features/store'
import { useGlobalContext } from '../../../features/Context/UserStore';
import { useGlobalContextGoal } from '../../../features/Context/culturaStore';
import Continut from '../../Client/Crud/GetAllInRotatie/page';


function RotatieDashboard() {
  const navigate = useRouter()
  // const dispatch = useDispatch()


  const { data } = useGlobalContext()
  // const { goals, isLoading, isError, message } = useSelector(
  //   (state : RootState) => state.goals
  // )

  const { user } = data

  const {goals , isLoading, isError, message, getGoals , getAllGoals } = useGlobalContextGoal()

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    getAllGoals()
  }, [isError, message])

  if (isLoading) {
    return <Spinner />
  }

  if (data.rol == "admin"){
  return (
    <>
    <Container><Card>
      <section className='heading'>
        <h1>Salut f  {data["name"]}</h1>
        

      </section>
      <h3>Sa facut selectie :</h3>
  
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.filter((goal) => goal.programare).map((goal) => (
              <Continut key={goal._id} goal={goal} />
            ))}
          
          </div>
        ) : (
          <h3>Nici o cerere momentan</h3>
        )}
      </section>
      </Card>
<LinkParola/>
      </Container>
    </>
    
  )} else {
   
    return(
      <>
    <Container><Card>
      <section className='heading'>
        <h1>Salut D {data && data.name}</h1> 
      </section>
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            <p>ceva</p>
     
{goals.filter((goal) => goal.programareBy == data.id).map((goal) => (
              <Continut key={goal._id} goal={goal} />
            ))}

          </div>
        ) : (
          <h3>Nici o cerere momentan</h3>
        )}
      </section>
      </Card>
<LinkParola/>
      </Container>
    </>
    )
  }
}

export default RotatieDashboard
