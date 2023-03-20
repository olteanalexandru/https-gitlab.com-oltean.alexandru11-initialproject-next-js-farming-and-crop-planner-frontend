import Link from 'next/link';
import HeaderLog from './Crud/Header'


export default function Header() {
  return (
    <div style={{'backgroundColor': 'ghostwhite'}}>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
  <header id="header">
  <div className="container d-flex align-items-center justify-content-between">
    <h2 className="logo"><Link href="/">Platforma agricola</Link></h2>
    <nav id="navbar" className="navbar">
      <ul>
        <li className="nav-link scrollto active" ><Link href="/">Home</Link></li>
        <li className="nav-link scrollto" ><Link href="pages/noutati"> Noutati </Link></li>
        <li className="nav-link scrollto"><Link href="pages/desprenoi">Despre noi</Link></li>
        <li className="nav-link scrollto"><Link href="pages/Rotatie">Culturi</Link></li>
        <li className="nav-link scrollto" ><Link href="pages/vanzari">Vanzari</Link></li>
        <br/><br/><br/>
        <li className="getstarted scrollto"><Link href="/pages/contact">Contacteaza-ne</Link></li>
        <li className="nav-link scrollto"><HeaderLog/></li>
      </ul>
    </nav>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </div>
</header>
    <hr />
  </div>
  );}
