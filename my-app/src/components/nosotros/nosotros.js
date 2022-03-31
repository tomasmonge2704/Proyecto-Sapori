import './nosotros.css'
import fotoLugar from '../../img/fotoLugar.jpg';
import fotoFamilia from '../../img/fotoFamilia.png';
export default function SobreNosotros(){
    
    return(
        <>
        <section className="c-split c-split--vcenter revealable c-split-1 c-split-odd revealed">
        <div className="c-split__col ">
          <div className="c-split__col-inner">
            <div className="c-split__content content">
              <h2 className="h2 c-split__heading">Craft BBQ</h2>
              <p>Serving American Regional Barbecue with an emphasis on fresh ingredients, curated sandwiches, and weekly specials all made from scratch. Available for pickup &amp; delivery!</p>
              <a href="/order-online" className="btn btn-brand">Order Now</a>
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
            <h2 className="h2 c-split__heading">Catering</h2>
            <p>We'll bring the 'que to you!</p>
            <a href="/catering" className="btn btn-brand">See Catering Options</a>
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