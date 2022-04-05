import logoBlanco from "../../img/logo-blanco.png";
import { Link } from "react-router-dom";
import "./nav.css";
import $ from "jquery";

let classMobi = "site-header-mobi-panel"
$(document).on("click", ".mobilink", function () {
  $("#botonHamburgesa").removeClass("nav-toggle-btn--active");
  $("#botonHamburgesa").attr("aria-expanded","false");
  $("#botonHamburgesa").css("outline","none");
  $("#SiteHeaderMobilePanel").removeClass("site-header-mobi-panel--show site-header-mobi-panel--open");
});

export default function Nav(props) {
  
  let classname = "site-header-desktop-primary";
  if (props.props == "negro") {
    classname = "site-header-desktop-primary negro";
  }
  return (
    <header className="site-header">
      <a href="#main-content" className="skip">
        Skip to main content
      </a>
      <div className="site-header-desktop">
        <div className={classname} data-header-sticky>
          <div className="container">
            <div className="site-logo">
              <Link to={`/`} style={{ textDecoration: "none" }}>
                <a className="site-logo__btn" href="/">
                  <img
                    className="site-logo__expanded"
                    src={logoBlanco}
                    alt="Federalist Pig Home"
                  />
                  <img
                    className="site-logo__collapsed"
                    src={logoBlanco}
                    alt="qr code"
                  />
                </a>
              </Link>
            </div>
            <nav className="site-nav">
              <ul className="site-nav-menu" data-menu-type="desktop">
                <li>
                  <Link
                    to={`/`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/location`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link"
                  >
                    Donde encontrarnos
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/contacto`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link"
                  >
                    Contacto
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/productos`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/nosotros`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/nosotros`}
                    style={{ display: "none" }}
                    className="site-nav-link"
                  >
                    Testiomonios
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="site-header-mobi"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu Modal"
      >
        <div className="site-logo">
          <a className="site-logo__btn" href="/">
            <img src={logoBlanco} alt="Federalist Pig Home" />
            <img src={logoBlanco} alt="qr code" />
          </a>
        </div>
        <button
          id="botonHamburgesa"
          type="button"
          className="nav-toggle-btn"
          aria-controls="SiteHeaderMobilePanel"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Navigation</span>
          <span className="nav-toggle-btn__line" />
          <span className="nav-toggle-btn__line" />
          <span className="nav-toggle-btn__line" />
        </button>
        <div id="SiteHeaderMobilePanel" className={classMobi}>
          <div className="site-header-mobi-panel__inner">
            <nav className="site-nav" aria-label="Navigation Menu">
              <ul className="site-nav-menu" data-menu-type="mobile">
                <li>
                  <Link
                    to={`/`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link mobilink"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/location`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link mobilink"
                  >
                    Donde encontrarnos
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/contacto`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link mobilink"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/productos`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link mobilink"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/nosotros`}
                    style={{ textDecoration: "none" }}
                    className="site-nav-link mobilink"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="site-social site-social--bordered">
              <ul className="social-accounts">
                <li>
                  <a
                    href="https://wa.me/5491154146740"
                    target="_blank"
                    rel="noopener"
                    data-bb-track="button"
                    data-bb-track-on="click"
                    data-bb-track-category="Social Icons"
                    data-bb-track-action="Click"
                    data-bb-track-label="Twitter, Header"
                  >
                    <span className="fa fa-whatsapp" aria-hidden="true" />
                    <span className="sr-only">Whatsapp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sapori.intensi/"
                    target="_blank"
                    rel="noopener"
                    data-bb-track="button"
                    data-bb-track-on="click"
                    data-bb-track-category="Social Icons"
                    data-bb-track-action="Click"
                    data-bb-track-label="Instagram, Header"
                  >
                    <span className="fa fa-instagram" aria-hidden="true" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="site-powered-by">
            <a
              href="https://github.com/tomasmonge2704"
              target="_blank"
              rel="noopener"
            >
              powered by Tomas Monge
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
