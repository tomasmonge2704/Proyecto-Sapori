import logoBlanco from '../img/logo-blanco.png';
import { Link } from 'react-router-dom';


export default function Nav(props){
  let classname = "site-header-desktop-primary"
  console.log(props.props)
 if(props.props == "negro"){
  classname = "site-header-desktop-primary negro"
 }
    return(
    <header className="site-header">
    <a href="#main-content" className="skip">Skip to main content</a>
    <div className="site-header-desktop">
      <div className={classname} data-header-sticky>
        <div className="container">
          <div className="site-logo">
            <a className="site-logo__btn" href="/">
              <img className="site-logo__expanded" src={logoBlanco} alt="Federalist Pig Home" />
              <img className="site-logo__collapsed" src={logoBlanco} alt="qr code" />
            </a>
          </div>
          <nav className="site-nav">
            <ul className="site-nav-menu" data-menu-type="desktop">
              <li>
                <Link to={`/`} style={{ textDecoration: 'none' }}><a className="site-nav-link" href="/menus/">Home</a>
                </Link>
              </li>
              <li>
              <Link to={`/location`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/location">Donde encontrarnos</a>
                </Link>
              </li>
             
              <li>
              <Link to={`/contacto`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/">Contacto</a>
                </Link>
              </li>
              
              <li>
              <Link to={`/productos`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/" >Productos</a>
                </Link>
              </li>
              <li>
              <Link to={`/nosotros`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/">Sobre Nosotros</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="site-header-mobi" role="dialog" aria-modal="true" aria-label="Navigation Menu Modal">
      <div className="site-logo">
        <a className="site-logo__btn" href="/">
          <img src={logoBlanco} alt="Federalist Pig Home" />
          <img src={logoBlanco} alt="qr code" />
        </a>
      </div>
      <button type="button" className="nav-toggle-btn" aria-controls="SiteHeaderMobilePanel" aria-expanded="false">
        <span className="sr-only">Toggle Navigation</span>
        <span className="nav-toggle-btn__line" />
        <span className="nav-toggle-btn__line" />
        <span className="nav-toggle-btn__line" />
      </button>
      <div id="SiteHeaderMobilePanel" className="site-header-mobi-panel">
        <div className="site-header-mobi-panel__inner">
          <nav className="site-nav" aria-label="Navigation Menu">
            <ul className="site-nav-menu" data-menu-type="mobile">
            <li>
                <Link to={`/`} style={{ textDecoration: 'none' }}><a className="site-nav-link" href="/menus/">Home</a>
                </Link>
              </li>
              <li>
              <Link to={`/location`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/location">Donde encontrarnos</a>
                </Link>
              </li>
             
              <li>
              <Link to={`/contacto`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/">Contacto</a>
                </Link>
              </li>
              <li>
              <Link to={`/productos`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/" target="_blank" rel="noopener">Productos</a>
                </Link>
              </li>
              <li>
              <Link to={`/nosotros`} style={{ textDecoration: 'none' }}>
                <a className="site-nav-link" href="/about/">Sobre Nosotros</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-social site-social--bordered">
            <ul className="social-accounts">
              <li>
                <a href="https://www.facebook.com/federalistpig/" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Facebook, Header"><span className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a>
              </li>
              <li>
                <a href="https://twitter.com/federalistpig?lang=en" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Twitter, Header"><span className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a>
              </li>
              <li>
                <a href="https://www.instagram.com/federalistpig/" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Instagram, Header"><span className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-powered-by">
          <a href="https://github.com/tomasmonge2704" target="_blank" rel="noopener">powered by Tomas Monge</a>
        </div>
      </div>
    </div>
  </header>)

}