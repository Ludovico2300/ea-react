import { Button } from "./utils/Button";

export default function Footer() {
  return (
    <div className="footer">
      <div id="banner-footer">
        <img
          className="banner"
          alt="banner"
          src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
        />

        <div id="iscrizione-footer">
          <img src="../assets/footer/ea-play-logo.svg" alt="logo-play" />
          <h4 className="description">
            Non limitarti al gioco. Gioca al massimo. Sblocca ricompense
            esclusive, contenuti per i soli membri e una libreria dei migliori
            titoli.
          </h4>
          <Button buttonStyle="btn--outline-white" buttonSize="btn--medium">
            Iscriviti subito
          </Button>
        </div>
      </div>

      <div id="parent-control-footer">
        <h2 className="parent-description">
          Genitori: il controllo dei videogiochi è nelle vostre mani.
        </h2>
        <Button buttonStyle="btn--outline-black" buttonSize="btn--medium">
          Scopri di più
        </Button>
      </div>

      <div id="sub-footer-1">
        <div id="sub-footer-link">
          <a href="#">Lavora con noi</a>
          <a href="#">Dirigenza</a>
          <a href="#">Rapporto sull'impatto</a>
          <a href="#">Attività politiche</a>
          <br />
          <a href="#">Segnala un problema</a>
          <a href="#">Dichiarazione globale sul rispetto dei diritti umani</a>
          <a href="#">Sicurezza e privacy</a>
        </div>
        <div id="sub-footer-social">
          <h3>Partecipa alla conversazione</h3>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitch"></i>
        </div>
      </div>

      <div id="sub-footer-2">
        <div id="sub-footer-logo">
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"
            alt="logo"
            className="sub-footer-circle"
          />
        </div>

        <div id="sub-footer-part2">
          <div id="sub-footer-accessibilità">
            <a href="#" className="sup-span">
              Libreria dei giochi
            </a>
            <a href="#" className="sup-span">
              Registrati
            </a>
            <a href="#" className="sup-span">
              Riscatta codice
            </a>
            <a href="#" className="sup-span">
              {" "}
              Origin
            </a>
            <a href="#" className="sup-span">
              Informazioni
            </a>
            <a href="#" className="sup-span">
              Accessibilità
            </a>
            <a href="#" className="sup-span">
              Aiuto
            </a>
          </div>
          <div id="sub-footer-privacy">
            <a href="#" className="sub-span">
              Note legali e privacy
            </a>
            <a href="#" className="sub-span">
              Accordo con l’utente
            </a>
            <a href="#" className="sub-span">
              Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)
            </a>
            <a href="#" className="sub-span">
              Aggiornamenti sui servizi online
            </a>
            <a href="#" className="sub-span yt">
              Termini di servizio di YouTube
            </a>
            <a href="#" className="sub-span">
              Norme sulla privacy di Google
            </a>
            <a href="#" className="sub-span">
              Cookie Preferenze
            </a>
            <a href="#" className="sub-span">
              © 2022 Electronic Arts Inc.
            </a>
          </div>
        </div>

        <div id="sub-footer-select">
          <div className="first-select">
            <h4 className="sup-text">Prezzi Regionali</h4>
            <div className="option-select">
              <h4 className="sub-text">Italia</h4>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="second-select">
            <h4 className="sup-text">Lingua</h4>
            <div className="option-select">
              <h4 className="sub-text">🍕 Italia</h4>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
