import Link from "next/link";
import Mail from "./Componente/Mail"

export default function Footer() {
  return (
<div className="footer-top container" style={{borderTop:'1px dotted'}}>
<footer id="footer">
        <div className="row">
        <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Imobiliare</h3>
            <p> By default bootstrap  pref<br />
              5 does not support hover. But most developers<br />
              Romania <br /><br />
              <strong>Phone:</strong> 0755494691<br />
              <strong>Email:</strong> Oltean.alexandru11@gmail.com<br /> </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Pagini folositoare</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link href="/#">Home</Link> </li>
              <li><i className="bx bx-chevron-right"></i> <Link href="pages/desprenoi">About us</Link> </li>
              <li><i className="bx bx-chevron-right"></i> <Link href="pages/noutati">Noutati</Link> </li>
              <li><i className="bx bx-chevron-right"></i> <Link href="/pages/contact"> Contact</Link> </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Servicile noaste</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link href="pages/desprenoi">Despre Noi</Link> </li>
              <li><i className="bx bx-chevron-right"></i> <Link href="pages/Rotatie">Rotatie</Link> </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Newsletter</h4>
            <p>Nu te vom contacta decat cu informatii relevante</p>
            <Mail/>         
          </div>
        </div>
    
    <div className="container d-md-flex py-4 me-md-auto text-center text-md-start copyright">
          &copy; Copyright <strong><span>Oltean Alexandru Florin</span></strong>. All Rights Reserved   
    </div>
  </footer>
  </div>
    ); }

