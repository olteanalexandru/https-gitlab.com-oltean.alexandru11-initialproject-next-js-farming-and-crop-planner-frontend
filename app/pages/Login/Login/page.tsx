"use client"
import {useEffect, useState} from 'react'
import {FaSignInAlt, FaUser} from 'react-icons/fa'
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useGlobalContext} from '../../../Context/UserStore'
import Spinner from '../../../Crud/Spinner'
import Link from 'next/link';

function Login() {

  const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
  
    const { email, password } = formData
  

    const { data, setData, error, setError, loading, login } = useGlobalContext()

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



  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Autentifică-te și începe să stabilești culturi</p>
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
        <ul>
        <li className="nav-link-login d-inline-block">
              <Link href="/pages/Login/Register" className="text-decoration-none text-dark">
                Nu ai cont?  Înregistrează-te <FaUser />
              </Link>
            </li>
        </ul>
      </section>
    </>
  )
}

export default Login