"use client"

import { useState } from 'react'
import FileBase from 'react-file-base64';
import { useGlobalContextPost } from '../Context/postStore';
import { useGlobalContext } from '../Context/UserStore';


function PostForm() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const { createPost } = useGlobalContextPost()
    const { data } = useGlobalContext()

    const onSubmit = (e : any) => {
        e.preventDefault()
        if (!title || !text || !description ) {
            alert('Ceva lipseste')
            return
        }
        createPost({ title, text, description, image },data.token)
        setTitle('')
        setText('')
        setDescription('')
        setImage('')    
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit} >
                <div className='form-group'>
                    <label htmlFor='titlu'>Titlu:</label>
                    <input
                        type='title'
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
                        onChange={(e) => setText(e.target.value) }
                    />  
                    <label htmlFor='Descriere'>Continut:</label>
                    <input
                        type='Descriere'
                        name='description'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value) }
                    />
                    <label htmlFor='image'>Imagine:</label>
                    <FileBase
                        multiple={ false }
                        onDone={ ({ base64 }) => setImage(base64) }
                    />
                    <input type='submit' value='Adauga' className='btn btn-block' />
                </div>
            </form>
        </section>
    )
}

export default PostForm
