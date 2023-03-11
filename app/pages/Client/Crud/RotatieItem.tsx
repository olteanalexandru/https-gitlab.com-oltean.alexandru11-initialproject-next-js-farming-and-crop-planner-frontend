// @ts-nocheck
"use client"
import { useGlobalContextGoal } from '../../../features/Context/culturaStore';

function RotatieItem({ goal }) {

  const { deleteGoal } = useGlobalContextGoal()

  return (
    <div className='goal'>
      
      <h2>{goal.titlu}</h2>
      <h2>{goal.text}</h2>
      <img src={ "data:image/jpeg;"+goal.image.substring(2, goal.image.length - 2)} alt={goal.titlu} style={{width: 300, height: 400}} />
      <p>{goal.descriere}</p>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <button onClick={ () => deleteGoal(goal._id) } className='close'>
        X
      </button>
    </div>
  )
}

export default RotatieItem