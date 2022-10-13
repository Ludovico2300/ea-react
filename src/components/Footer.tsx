import { Button } from "./utils/Button";
import { Link } from "react-router-dom";

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
          <Link to="#">Lavora con noi</Link>
          <Link to="#">Dirigenza</Link>
          <Link to="#">Rapporto sull'impatto</Link>
          <Link to="#">Attività politiche</Link>
          <br />
          <Link to="#">Segnala un problema</Link>
          <Link to="#">Dichiarazione globale sul rispetto dei diritti umani</Link>
          <Link to="#">Sicurezza e privacy</Link>
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
            <Link to="#" className="sup-span">
              Libreria dei giochi
            </Link>
            <Link to="#" className="sup-span">
              Registrati
            </Link>
            <Link to="#" className="sup-span">
              Riscatta codice
            </Link>
            <Link to="#" className="sup-span">
              {" "}
              Origin
            </Link>
            <Link to="#" className="sup-span">
              Informazioni
            </Link>
            <Link to="#" className="sup-span">
              Accessibilità
            </Link>
            <Link to="#" className="sup-span">
              Aiuto
            </Link>
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
          <div id="sub-footer-privacy">
            <Link to="#" className="sub-span">
              Note legali e privacy
            </Link>
            <Link to="#" className="sub-span">
              Accordo con l’utente
            </Link>
            <Link to="#" className="sub-span">
              Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)
            </Link>
            <Link to="#" className="sub-span">
              Aggiornamenti sui servizi online
            </Link>
            <Link to="#" className="sub-span yt">
              Termini di servizio di YouTube
            </Link>
            <Link to="#" className="sub-span">
              Norme sulla privacy di Google
            </Link>
            <Link to="#" className="sub-span">
              Cookie Preferenze
            </Link>
            <Link to="#" className="sub-span">
              © 2022 Electronic Arts Inc.
            </Link>
          </div>


        
        </div>

      </div>
    </div>
  );
}
