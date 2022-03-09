import picada from "../img/klipartz.com.png";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
export default function Home() {
  return (
    <div className="site-content">
      <div
        className="site-header-spacer-mobile"
        aria-hidden="true"
        style={{ height: "58px" }}
      />
      <main className="site-content__main page-id--219067">
        <h1 className="sr-only">Home</h1>
        <span id="main-content" className="sr-only">
          Main content starts here, tab to start navigating
        </span>
        <section
          id="hero"
          className="hero hero--fullheight revealable revealed"
          style={{ backgroundColor: "#b01e22", height: "1109.95px" }}
        >
          <div className="hero__content container">
            <p>
              <img
                src={picada}
                className="fr-fic fr-dib hero-burger"
                data-alt_text="a close up of a sandwich"
                alt="a close up of a sandwich"
                style={{ width: "50%" }}
              />
            </p>
            <div className="shop-fed-pig">
              <p>
                <a className="btn btn-brand" href="/order-online">
                  Pedi tu picada
                </a>
              </p>
            </div>
            <div className="social-hero">
              <p>
              <BootstrapTooltip title="Escribenos!" placement="right">
                <a
                  data-bb-track="button"
                  data-bb-track-action="Click"
                  data-bb-track-category="Social Icons"
                  data-bb-track-label="Facebook, Footer"
                  data-bb-track-on="click"
                  href="https://www.facebook.com/federalistpig/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="fa fa-whatsapp">
                    &nbsp;&nbsp;
                  </span>
                  <span className="sr-only">Whatsapp</span>
                </a>
                </BootstrapTooltip>
                <BootstrapTooltip title="Mira nuestro hermoso instagram!" placement="right">
                <a
                  data-bb-track="button"
                  data-bb-track-action="Click"
                  data-bb-track-category="Social Icons"
                  data-bb-track-label="Instagram, Footer"
                  data-bb-track-on="click"
                  href="https://www.instagram.com/federalistpig/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fa fa-instagram" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </a>
                </BootstrapTooltip>
              </p>
            </div>
          </div>
        </section>
      </main>
      <aside className="mobi-footer mobi-footer--sticky">
        <ul className="mobi-footer__list">
          <li className="mobi-footer__item">
            <a href="/order-online" className="btn btn-brand-alt btn-block"
              >Pedi tu picada</a
            >
          </li>
        </ul>
      </aside>
    </div>
  );
}
