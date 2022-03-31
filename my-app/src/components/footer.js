export default function Footer() {
    return (
    
        <footer>
        <div className="site-footer-desktop site-footer-desktop--show">
          <div className="site-footer-desktop-primary">
            <div className="site-footer-desktop-primary__container container">
              <ul className="social-accounts">
                <li><a href="https://www.facebook.com/federalistpig/" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Facebook, Footer"><span className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a></li>
                <li><a href="https://twitter.com/federalistpig?lang=en" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Twitter, Footer"><span className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/federalistpig/" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Instagram, Footer"><span className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a></li>
              </ul>
              <nav className="site-nav">
                <ul className="site-nav-menu">
                  <li>
                    <a className="site-nav-link" href="/reheating-instructions/">Reheating Instructions</a>
                  </li>
                  <li>
                    <a className="site-nav-link" href="https://queforthepeople.efficientapply.com/" target="_blank" rel="noopener">Careers</a>
                  </li>
                  <li>
                    <a className="site-nav-link" href="/contact/">Contact</a>
                  </li>
                  <li><button type="button" className="btn btn-brand-alt" data-popup="inline" data-popup-src="#popup-newsletter-form" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Email Sign Up Trigger Button" data-bb-track-action="Click" data-bb-track-label="Callout, Footer" style={{}}>Email Signup</button></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="site-footer-desktop-secondary">
            <div className="site-powered-by">
              <a href="https://getbento.com/?utm_source=footer&utm_campaign=federalistpig.com" target="_blank" rel="noopener">powered by BentoBox</a>
            </div>
          </div>
        </div>
      </footer>
     
    );
  }