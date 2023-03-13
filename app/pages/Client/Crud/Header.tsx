'use client'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useGlobalContext} from '../../../features/Context/UserStore';
import Link from 'next/link';
import {useRouter} from 'next/navigation';


function HeaderLog() {
  const { data,  logout } = useGlobalContext()

  

  const navigate = useRouter() ;
  

  const onLogout = () => {
    logout()
    navigate.push('/')
  }


  return (
    <header className='header'>
   { data.token  ?  <div className='logo'>
        <Link href='/pages/Login/Dashboard/'>{ data.name}</Link>
      <br /> 
        <Link href='/pages/Login/RotatieDashboard/'>Pagina Rotatie</Link>
      </div> : ''} 
      <ul>
        {data.token ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link href='/pages/Login/Login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link href='/pages/Login/Register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        ) } 
      </ul>
    </header>
  ) 
}

export default HeaderLog