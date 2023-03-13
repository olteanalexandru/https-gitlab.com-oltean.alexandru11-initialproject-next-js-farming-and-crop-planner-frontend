// @ts-nocheck
"use client"
import { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useGlobalContextCrop } from '../../../features/Context/culturaStore';
import { useGlobalContext } from '../../../features/Context/UserStore';


function RotatieForm() {
  const [titlu, setTitlu] = useState('')
  const [text, setText] = useState('')
  const [descriere, setDescriere] = useState('')
  const [image, setImage] = useState('')


  const { createCrop } = useGlobalContextCrop()
  const { data } = useGlobalContext()
  const { user } = data


 
  const onSubmit = (e) => {
    e.preventDefault()
    if (!titlu || !text || !descriere || !image) {
      alert('Ceva lipseste')
      return
    }
    createCrop({ titlu, text, descriere, image },data.token)
    setTitlu('')
    setText('')
    setDescriere('')
    setImage('')    
  }






  return (
    <section className='form'>
      <form onSubmit={onSubmit} >
        <div className='form-group'>
        <label htmlFor='titlu'>Titlu:</label>
           <input
            type='titlu'
            name='titlu'
            id='titlu'
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />

          <label htmlFor='text'>Pe scurt:</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value) }
          />
          
         <label htmlFor='Descriere'>Continut:</label>
          <input
            type='Descriere'
            name='Descriere'
            id='Descriere'
            value={descriere}
            onChange={(e) => setDescriere(e.target.value) }
          />

         <h3 className="text-center mb-4">Add Image</h3>
                   

        <FileBase64
        multiple={ false }
        onDone={ ({base64}) =>setImage({base64})} /> 
                
              


        </div>

        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Adauga continut
          </button>
        </div>
      </form>
    </section>
  )
}

export default RotatieForm