import Link from "next/link";
import Mail from "./Componente/Mail"

export default function Footer() {
  return (
    <div className="bg-light" style={{ borderTop: '1px dotted' }}>
      <footer id="footer" className="bg-success py-2 rounded mx-auto w-100" style={{ maxWidth: '1200px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
            <h3 className="text-white">Platforma agricola</h3>
          <p className="text-white">
            Care are de aface cu agricultura<br />
            <strong className="text-white">Phone:</strong> 0755494691<br />
            <strong className="text-white">Email:</strong> Oltean.alexandru11@gmail.com<br />
          </p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h4 className="text-white">Pagini folositoare</h4>
          <ul>
            <li className="nav-list"><Link href="/" className="nav-link text-light">Home</Link></li>
            <li className="nav-list"><Link href="/pages/desprenoi" className="nav-link text-light">Despre noi</Link></li>
            <li className="nav-list"><Link href="/pages/noutati" className="nav-link text-light">Noutati</Link></li>
            <li className="nav-list"><Link href="/pages/contact" className="nav-link text-light">Contact</Link></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white">Servicile noaste</h4>
          <ul>
            <li className="nav-list"><Link href="/pages/Recomandari" className="nav-link text-light">Recomandari</Link></li>
            <li className="nav-list"><Link href="/pages/Rotatie" className="nav-link text-light">Rotatie</Link></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-white">Newsletter</h4>
          <p className="text-white">Nu te vom contacta decat cu informatii relevante</p>
          <Mail />
        </div>
      </div>
    </div>
    <div className="container d-md-flex py-4 me-md-auto text-center text-md-start">
      <p className="text-white">&copy;{new Date().getFullYear()} Platforma agricola. All rights reserved.</p>
    </div>
  </footer>
</div>
);
}
