
"use client"
import { useEffect, useState } from 'react'
import { useSearchParams} from 'next/navigation'
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';


function SinglePag( ): JSX.Element{

  if (localStorage.getItem('user') === null) {
    return <h1>Accesul interzis</h1>
  } 
    const { data } = useGlobalContext()
    const  _id = useSearchParams().get("crop") as string
    const user = localStorage.getItem('user')
    const Localuser  = localStorage.getItem('user')
    const LocaluserId = Localuser !== null ? JSON.parse(Localuser)._id : null
    const token = user !== null ? JSON.parse(user).token : null

    const { 
      crops,
      isLoading,
      isError,
      message,
      selectare,
      SinglePage,
      } = useGlobalContextCrop();


    const [selectarea, setSelectarea] = useState(false);

    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      SinglePage(_id )
    }, [  isError, message, _id])

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    if (isError) {
      return <h1>{message}</h1>
    }






// console.log(LocaluserId)
console.log(selectare)




    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (data && data.rol === "client" && selectarea === true || data && data.rol === "admin" && selectarea === true) {
        await selectare(_id , selectarea , LocaluserId  , token)
        setSelectarea(false)
      } else if (data && data.rol === "client" && selectarea === false || data && data.rol === "admin" && selectarea === false) {
        await selectare(_id , selectarea , LocaluserId , token) 
        setSelectarea(true)

    }
    }
  


    function CropData() {
      if (isError) {
        return <h1>Something went wrong.</h1>;
      } else if (data && data.rol === "client") {
        return (
          <>
            <p>Selectare cultura</p>
            <Form onSubmit={onSubmit} >
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={selectarea} onChange={(e) => setSelectarea(e.target.checked)} id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Selecteaza
                </label>
              </div>
              <button type='submit' className='btn btn-primary'>Selectare</button>
            </Form>
          </>
        )
      } else if (data && data.rol === "admin") {
        return (
          <>
            <p>Selectare cultura</p>
            <Form onSubmit={onSubmit} >
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={selectarea} onChange={(e) => setSelectarea(e.target.checked)} id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Selecteaza
                </label>
              </div>
              <button type='submit' className='btn btn-primary'>Selectare</button>
            </Form>
          </>
        )
      } else { return null }
    }
    
 return  (

   <>
<Container>
<div id="background" className="jumbotron textCenter " style={{ 'borderBottom': '1px darkgray dotted' }}>
<div className=" thumbnail">
<p><strong>{crops["titlu"]}</strong></p>
<h3>Pe scurt:</h3><p>{crops["text"]}</p>
<h3>Pe Lung:</h3><p>{crops["descriere"]}</p>
{(crops["selectare"] && crops["selectareBy"]== LocaluserId ) ?  <> <h3>Selectat</h3> <p> {crops["selectare"]} </p></> : <p>ne selectat</p>}
<h1>{token}</h1>
</div>
<p>Data adaugarii: {new Date(crops["createdAt"]).toLocaleString('en-US')}</p>
</div>
<CropData/>
</Container>
 </>
)}
 export default SinglePag