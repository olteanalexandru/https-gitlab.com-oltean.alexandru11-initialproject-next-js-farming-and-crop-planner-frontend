// @ts-nocheck
"use client"
import { useGlobalContextCrop } from '../Context/culturaStore';

function RotatieItem({ crop }) {

  const { deleteCrop } = useGlobalContextCrop()

  return (
    <div className='crop'>
      
      <h2>{crop.titlu}</h2>
      <h2>{crop.text}</h2>
      <img src={ "data:image/jpeg;"+crop.image.substring(2, crop.image.length - 2)} alt={crop.titlu} style={{width: 300, height: 400}} />
      <p>{crop.descriere}</p>
      <div>{new Date(crop.createdAt).toLocaleString('en-US')}</div>
      <button onClick={ () => deleteCrop(crop._id) } className='close'>
        X
      </button>
    </div>
  )
}

export default RotatieItem