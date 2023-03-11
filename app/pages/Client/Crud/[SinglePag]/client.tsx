"use client"
import { useEffect, useState } from 'react'
import { useSearchParams} from 'next/navigation'
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useGlobalContext } from '../../../../features/Context/UserStore';
import { useGlobalContextGoal } from '../../../../features/Context/culturaStore';


function Client({ _id, token, LocaluserId }): JSX.Element{

    const { data } = useGlobalContext()

    const user = data
    // const token = data.token

    



    //
    // const  _id = useSearchParams().get("goal")

    const { 
      goals,
      setGoals,
      isLoading,
      isError,
      isSuccess,
      message,
      programare,
      SinglePage,
      } = useGlobalContextGoal();


    const [programarea, setProgramarea] = useState(false);


    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      SinglePage(_id)
    }, [  isError, message, _id])

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    if (isError) {
      return <h1>{message}</h1>
    }




// const Localuser = localStorage.getItem('user')
// const LocaluserId = JSON.parse(Localuser)._id

console.log(LocaluserId)




    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (data && data.rol === "client" && programarea === true || data && data.rol === "admin" && programarea === true) {
        await programare(_id , programarea , LocaluserId  , token)
        setProgramarea(false)
      } else if (data && data.rol === "client" && programarea === false || data && data.rol === "admin" && programarea === false) {
        await programare(_id , programarea , LocaluserId , token) 
        setProgramarea(true)

    }
    }


    function GoalData() {
      if (isError) {
        return <h1>Something went wrong.</h1>;
      } else if (data && data.rol === "client") {
        return (
          <>
            <p>Selectare cultura</p>
            <Form onSubmit={onSubmit} >
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={programarea} onChange={(e) => setProgramarea(e.target.checked)} id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Selecteaza
                </label>
              </div>
              <button type='submit' className='btn btn-primary'>Programare</button>
            </Form>
          </>
        )
      } else if (data && data.rol === "admin") {
        return (
          <>
            <p>Selectare cultura</p>
            <Form onSubmit={onSubmit} >
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={programarea} onChange={(e) => setProgramarea(e.target.checked)} id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Selecteaza
                </label>
              </div>
              <button type='submit' className='btn btn-primary'>Programare</button>
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
<p><strong>{goals["titlu"]}</strong></p>
<h3>Pe scurt:</h3><p>{goals["text"]}</p>
<h3>Pe Lung:</h3><p>{goals["descriere"]}</p>
{(goals["programare"]) ?  <> <h3>Selectat</h3> <p> {goals["programare"]} </p></> : <p>ne selectat</p>}
<h1>{token}</h1>
</div>
<p>Data adaugarii: {new Date(goals["createdAt"]).toLocaleString('en-US')}</p>
</div>
<GoalData/>
</Container>
 </>
)}

export default Client