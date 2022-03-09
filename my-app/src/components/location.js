export default function Location() {
  return (
    <div className="site-content">
      <div
        className="site-header-spacer-mobile"
        aria-hidden="true"
        style={{ height: "58px" }}
      />
        <section
          id="hero"
          className="hero--fullheight revealable revealed"
          style={{ backgroundColor: "#b01e22", height:"100% !important",padding:"0" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13143.707376084742!2d-58.4820547!3d-34.5554076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9495131869404ff!2sSapori%20Intensi!5e0!3m2!1ses!2sar!4v1646769487302!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </section>
    </div>
  );
}
