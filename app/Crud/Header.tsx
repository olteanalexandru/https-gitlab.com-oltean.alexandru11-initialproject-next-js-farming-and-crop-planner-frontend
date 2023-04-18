'use client'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useGlobalContext } from '../Context/UserStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function HeaderLog() {
  const { data, logout } = useGlobalContext();

  const navigate = useRouter();

  const onLogout = () => {
    logout();
    navigate.push('/');
  };

  return (
    <header className="header  py-2">
      {data.token ? (
        <div className="logo d-inline-block">
          <Link href="/pages/Login/Dashboard/" className="text-decoration-none text-dark fw-bold">{data.name}</Link>
          <br />
          {data.rol === 'Fermier' && (
            <Link href="/pages/Login/RotatieDashboard/" className="text-decoration-none text-dark">Pagina Rotatie</Link>
          )}
        </div>
      ) : (
        ''
      )}
      <ul className="list-unstyled mb-0">
        {data.token ? (
          <li className="d-inline-block">
            <button className="btn btn-outline-dark" onClick={onLogout} style={{borderRadius: "25px"}}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li className="nav-link-login d-inline-block">
              <Link href="/pages/Login/Login" className="text-decoration-none text-dark">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className="nav-link-login d-inline-block">
              <Link href="/pages/Login/Register" className="text-decoration-none text-dark">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default HeaderLog;