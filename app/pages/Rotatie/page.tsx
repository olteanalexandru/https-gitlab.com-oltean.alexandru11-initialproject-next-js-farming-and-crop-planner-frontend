
"use client"
import {  useEffect } from 'react';
import Spinner from '../Client/Crud/Spinner';
import Continut from '../Client/Crud/GetAllInRotatie/page';
import GridGenerator from '../../Extras/GridGen'
import { useGlobalContextCrop } from '../../features/Context/culturaStore';

export default function Rotatie() {


  const { 
    crops,
    isLoading,
    isError,
    message,
    getAllCrops,
    } = useGlobalContextCrop();

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    getAllCrops()
    
  }, [  isError, message])

  if (isLoading) {
    return <Spinner />
  }


return (

<div className="container text-center bg-grey border-colorat" style={{'paddingBottom':'4rem'}}>
  <h2 style={{marginBottom:' 3rem'}}>Oferim spre crop</h2>
  {crops.length > 0 ? (
    <div  >
          <GridGenerator   cols={3}  >

            {crops.map((crop ) => {
              return (
                <div style={{marginBottom:'4rem', minHeight:'200px' }}  >
                <Continut  key={crop._id} crop={crop} />
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