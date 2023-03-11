"use client"
import Link from 'next/link';
import Image from 'next/image'

function Continut({goal } : {goal : any } ): JSX.Element{

return (
  <>
  <div className=" thumbnail">
  <Image src={"data:image/jpeg;" + goal.image.substring(2, goal.image.length - 2)} width={500} height={500} className=" rounded img-fluid img" alt="Paris" />
  <p><strong>{goal.titlu}</strong></p>
  <p>{goal.text} id: {goal._id}</p>
  
</div>

<Link href={`/pages/Client/Crud/SinglePag?goal=${goal._id}`}><button type="button" className="btn btn-primary" > Vezi mai mult </button> </Link>
</>
)
} export default Continut
