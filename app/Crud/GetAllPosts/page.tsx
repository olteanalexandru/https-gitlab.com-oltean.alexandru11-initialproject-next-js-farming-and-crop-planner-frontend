import Link from 'next/link';
function Continut({data } : {data : any } ): JSX.Element{
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            
<Link href={`/Crud/GetAllPosts/SinglePost?post=${data._id}`}><button type="button" className="btn btn-primary" > Vezi mai mult </button> </Link>
        </div>
    )

}export default Continut