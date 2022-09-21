import { Button } from "./utils/Button";
import Herop from "./utils/Herop";

export default function Hero() {
  return (
    <div>
      <div className="hero-img">
       

        <div className="hero-img-one">
          <Herop
            source="https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-hero-medium-ratings-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
            game=""
            logo=""
          />
           <div className="bottom-img">
          <Herop
            source="https://media.contentapi.ea.com/content/dam/eacom/subscription/component-assets/common/ea-play-product-conversion-gradient-jpg-2020-xl.jpg.adapt.1920w.jpg"
            game=""
            logo=""
          />
          <p>Ciao a tutti</p>
        </div>
        </div>
      </div>
      <div className="apex-hero">
        
          <Herop
            source="https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-logo-hero-med-7x2-xl.png"
            game="Fifa"
            logo=""
          />
        
        <p>
          È più di un numero. Scopri subito i giocatori con valutazione più
          elevata <br></br>di FIFA 23!
        </p>
        <Button buttonSize="btn-medium" buttonStyle="btn--primary">
          Scopri le valutazioni
        </Button>
      </div>
    </div>
  );
}
