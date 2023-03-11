
"use client"
import {  useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Client/Crud/Spinner';
import Continut from '../Client/Crud/GetAllInRotatie/page';
// import {getAllGoals,reset} from '../../features/goals/goalSlice';
import GridGenerator from '../../Extras/GridGen'
// import { AppDispatch, RootState } from '../../features/store';
import { useGlobalContextGoal } from '../../features/Context/culturaStore';

export default function Rotatie() {
  // const dispatch = useDispatch<AppDispatch>()
  

  // const { goals , isLoading, isError, message } = useSelector(

  //   (state: RootState) => state.goals
  // )
  
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message)
  //   }

  
  //   dispatch(getAllGoals())

  //   return () => {
  //     dispatch(reset())
  //   }
  // }, [  isError, message, dispatch])

  // if (isLoading) {
  //   return <Spinner />
  // }

  const { 
    goals,
    isLoading,
    isError,
    message,

    getAllGoals,
    } = useGlobalContextGoal();



  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    getAllGoals()
    
  }, [  isError, message])




  if (isLoading) {
    return <Spinner />
  }



    




return (

<div className="container text-center bg-grey border-colorat" style={{'paddingBottom':'4rem'}}>
  <h2 style={{marginBottom:' 3rem'}}>Oferim spre goal</h2>
  
  

  {goals.length > 0 ? (
    <div  >
          <GridGenerator   cols={3}  >

            {goals.map((goal ) => {
              return (
                <div style={{marginBottom:'4rem', minHeight:'200px' }}  >
                <Continut  key={goal._id} goal={goal} />
                </div>
              );
            })}
            

              </GridGenerator>
              </div> 
            ) : (
              <h3>Nu sa adaugat nici un continut pana acum</h3>
            )}
            
           
      
</div>

)
}