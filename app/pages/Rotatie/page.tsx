
"use client"
import {  useEffect } from 'react';
import Spinner from '../../Crud/Spinner';
import Continut from '../../Crud/GetAllInRotatie/page';
import GridGenerator from '../../Componente/GridGen'
import { useGlobalContextCrop } from '../../Context/culturaStore';

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

  type Crop = {
    _id: string
    title: string
    description: string
    category: string
    startDate: string
    endDate: string
    status: string
    progress: number
    priority: string
    user: string
    selectare: boolean
    token: string
  }



return (

<div className="container text-center bg-grey border-colorat" style={{'paddingBottom':'4rem'}}>
  <h2 style={{marginBottom:' 3rem'}}>Oferim spre crop</h2>
  {crops.length > 0 ? (
    <div  >
          <GridGenerator   cols={3}  >

            {crops.map((crop : Crop ) => {
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