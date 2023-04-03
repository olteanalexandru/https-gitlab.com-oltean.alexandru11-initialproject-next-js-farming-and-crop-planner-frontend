"use client"

type cropType = {
  _id: string
  titlu: string
  descriere: string
  image: string
  text: string
  createdAt: string
}


import { useGlobalContextCrop } from '../Context/culturaStore';
import { useGlobalContext } from '../Context/UserStore';


function RotatieItem({ crop }: { crop: cropType } ) {
  const { deleteCrop } = useGlobalContextCrop()
  const { data } = useGlobalContext();
const { token } = data;

console.log("acesta",crop._id ,"tokenu:", token)
  return (
    <div className='crop'>
      <h2>{crop.titlu}</h2>
      <h2>{crop.text}</h2>
      <img src={ "data:image/jpeg;"+crop.image.substring(2, crop.image.length - 2)} alt={crop.titlu} style={{width: 300, height: 400}} />
      <p>{crop.descriere}</p>
      <div>{new Date(crop.createdAt).toLocaleString('en-US')}</div>
      <button onClick={ () => deleteCrop(crop._id , token  ) } className='close'>
         X
      </button>
    </div>
  )
}

export default RotatieItem