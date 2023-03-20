// @ts-nocheck
"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Spinner from '../../../Crud/Spinner'
import { Container , Card} from 'react-bootstrap'
import LinkParola from '../Elemente/page'
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';
import Continut from '../../../Crud/GetAllInRotatie/page';


function RotatieDashboard() {
  const navigate = useRouter()

  

  const {crops, isLoading, isError, message, getCrops , getAllCrops, selectare } = useGlobalContextCrop()
  const { data } = useGlobalContext()
 const {user } = data;
const LocalUser = localStorage.getItem('user')
const id = JSON.parse(LocalUser)._id

 useEffect(() => {
  if (isError) {
    console.log(message)
  }

  if (!data) {
    navigate.push('/login')
  }


    getAllCrops()

  return () => {
   }
}, [user, navigate, isError, message, data])

  if (isLoading) {
    return <Spinner />
  }
console.log(crops)
  if (data.rol == "admin"){
  return (
    <>
    <Container><Card>
      <section className='heading'>
        <h1>Salut admin:  {data["name"]}</h1>
        

      </section>
      <h3>S-au selectat :</h3>
  
      <section className='content'>
        {crops.length > 0 ? (
          <div className='crops'>
            {crops.filter((crop) => crop.selectare).map((crop) => (
              <Continut key={crop._id} crop={crop} />
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
        <h1>Salut utilizator {data && data.name}</h1> 
      </section>
      <section className='content'>
        {crops.length > 0 ? (
          <div className='crops'>
            <p>Ai selectat:</p>
     

            {crops.filter((crop) => crop.selectareBy === id).length == 0 ? (
              <p>Nu ai selectat nici o cerere</p>
            ) : (
              crops.filter((crop) => crop.selectare  && crop.selectareBy == id ).map((crop) => (
                <Continut key={crop._id} crop={crop} />
              ))
              
            )
            }

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
