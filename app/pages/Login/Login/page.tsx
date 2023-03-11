// @ts-nocheck
"use client"
import {useEffect, useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
// import { useSelector, useDispatch } from 'react-redux'
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { RootState } from '../../../features/store'
// import { login, reset } from '../../../features/Auth/authSlice'
import {useGlobalContext} from '../../../features/Context/UserStore'
import Spinner from '../../Client/Crud/Spinner'

function Login() {

  const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
  
    const { email, password } = formData
  

    const { data, setData, error, setError, loading, setLoading, register, login } = useGlobalContext()

  const navigate = useRouter()

  useEffect(() => {
    if (data.token) {
      navigate.push('/')
    } 
  }, [data])

  useEffect(() => {
    if (error) {
      toast.error(error)
      setError('')
    }

    if (data.error) {
      toast.error(data.error)
      setData({id:'', email: '', password: '', role: '', token: '' })
    }
  }, [error, data])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    console.log(localStorage.getItem('token'))
  }








 









  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   const userData = {
  //     email,
  //     password,
  //   }

  //   dispatch(login(userData))
  // }

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // })

  // const { email, password } = formData

  // const navigate = useRouter()
  // const dispatch = useDispatch()

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state : RootState) => state.auth
  // )


  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   const userData = {
  //     email,
  //     password,
  //   }

  //   dispatch(login(userData))
  // }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={formData.email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={formData.password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login