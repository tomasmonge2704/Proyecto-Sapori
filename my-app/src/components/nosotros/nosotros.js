import './nosotros.css'
import fotoLugar from '../../img/fotoLugar.jpg';
import fotoFamilia from '../../img/fotoFamilia.png';
import { Link } from "react-router-dom";
export default function SobreNosotros(){
    
    return(
        <>
        <section className="c-split c-split--vcenter revealable c-split-1 c-split-odd revealed">
        <div className="c-split__col ">
          <div className="c-split__col-inner">
            <div className="c-split__content content">
              <h2 className="h2 c-split__heading">Nuestro Lugar</h2>
              <p>Nos encontramos en Bs As, en Saavedra, Av. Dr. Ricardo Balbín 3695. No dudes en venir a visitarnos!</p>
              <Link to={`/location`} style={{ textDecoration: 'none' }}>
              <a href="/order-online" className="btn btn-brand">Como llegar</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="c-split__col c-split__col--empty borde">
          <div className="c-split__col-inner">
            <div className="c-split__image filter" role="img" aria-label="great american barbeque" style={{backgroundImage: `url(${fotoLugar})`, backgroundPosition: 'none'}} />
          </div>
        </div>
      </section>
      <section className="c-split c-split--vcenter c-split--alternate revealable c-split-2 c-split-even c-split-last revealed">
      <div className="c-split__col ">
        <div className="c-split__col-inner">
          <div className="c-split__content content">
            <h2 className="h2 c-split__heading">Nuestro Equipo</h2>
            <p>Somos una empresa familiar muy unida, tenes que venir a vivir anecdotas con nosotros!</p>
            <a href="https://www.instagram.com/sapori.intensi/" className="btn btn-brand">Mira nuestro instagram</a>
          </div>
        </div>
      </div>
      <div className="c-split__col c-split__col--empty borde">
        <div className="c-split__col-inner">
          <div className="c-split__image" role="img" aria-label="federalist pig chicken illustration" style={{backgroundImage: `url(${fotoFamilia})`, backgroundPosition: 'none'}} />
        </div>
      </div>
    </section>
    </>
    )
}