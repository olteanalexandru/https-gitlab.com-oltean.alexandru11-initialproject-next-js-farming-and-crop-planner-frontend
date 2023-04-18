import Link from 'next/link';
import HeaderLog from './Crud/Header';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-light">
      <header id="header" className="bg-success py-2 rounded mx-auto w-100" style={{ maxWidth: '1200px' }}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center">
            <Image src="/../public/Logo.png" width={50} height={50} alt="Platforma agricola logo" />
            <span className="ms-2 text-white">Platforma agricola</span>
          </Link>
          <nav id="navbar" className="navbar">
            <ul className="d-flex align-items-center justify-content-end mb-0">
              <li className="nav-item nav-list">
                <Link href="/" className="nav-link text-light px-2 ">Acasa
                </Link>
              </li>
              <li className="nav-item nav-list">
                <Link href="/pages/Noutati" className="nav-link text-light px-2">Noutati
                </Link>
              </li>
              <li className="nav-item nav-list">
                <Link href="/pages/desprenoi" className="nav-link text-light px-2">Despre noi
                </Link>
              </li>
              <li className="nav-item nav-list">
                <Link href="/pages/Rotatie" className="nav-link text-light px-2">Culturi
                </Link>
              </li>
              <li className="nav-item nav-list">
                <Link href="/pages/Recomandari" className="nav-link text-light px-2">Recomandari
                </Link>
              </li>
              <li className="nav-item nav-list">
                <Link href="/pages/contact" className="nav-link text-light px-2">Contacteaza-ne
                </Link>
              </li>
              <li className="nav-item nav-list">
                <HeaderLog />
              </li>
            </ul>
          </nav>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </div>
      </header>
      <hr />
    </div>
  );
}
