"use client"
import { useState } from 'react';
import { useGlobalContextCrop } from '../Context/culturaStore';
import { useGlobalContext } from '../Context/UserStore';
import FileBase from 'react-file-base64';

const RotatieForm = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const { createCrop } = useGlobalContextCrop()
  const { data } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title || !text || !description || !image) {
      alert('Ceva lipseste')
      return
    }
    createCrop({  title, text, description, image  },data.token)
    setTitle('')
    setText('')
    setDescription('')
    setImage('')    
  }

  return (
    <div>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Titlu:</label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor='text'>Pe scurt:</label>
            <input
              type='text'
              name='text'
              id='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <label htmlFor='description'>Continut:</label>
            <textarea
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <h3 className="text-center mb-4">Add Image</h3>
            <FileBase
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-block' type='submit'>
              Adauga continut
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RotatieForm;
