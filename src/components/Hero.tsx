
import { Button } from "./utils/Button";
import ImageSlider from "./utils/Carousel";
import Herop from "./utils/Herop";

export default function Hero() {
  const slides = [
    {
      /* url: "https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-hero-medium-ratings-7x2-xl.jpg.adapt.crop7x2.1920w.jpg", */
      url: "https://calciodangolo.com/wp-content/uploads/Totti_DSC_9351.jpg",
      title: "Fifa",
    },
    {
      url: "https://media.contentapi.ea.com/content/dam/apex-legends/mobile/common/season-2-5/apex-mobile-section-bg-keyart-hero-hyperbeat-xl.jpg.adapt.1920w.jpg",
      title: "Battlefield",
    },
    {
      url: "https://wallpaper.dog/large/20541898.jpg",
      title: "F1",
    },
    {
      url: "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/homepage/common/bf-2042-section-bg-homepage-experiences-xl.jpg.adapt.1024w.jpg",
      title: "Apex",
    },
  ];

  const containerStyles = {
    width: "100%",
    height: "70vh",
    margin: "0 auto",
  };

  return (
    <div className="hero">
      <div className="hero-img">
        {/* <div className="hero-img-one">
          <Herop
            source="https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-hero-medium-ratings-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
            game=""
            logo=""
          />
        </div> */}
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        {/* <div className="bottom-img">
          <Herop
            source="https://media.contentapi.ea.com/content/dam/eacom/subscription/component-assets/common/ea-play-product-conversion-gradient-jpg-2020-xl.jpg.adapt.1920w.jpg"
            game=""
            logo=""
          />
          <p>Unisciti a EA Play* e risparmia alla grande**</p>
          <Button buttonStyle="btn--outline-white" buttonSize="btn--medium">
            Iscriviti Subito
          </Button>
        </div> */}
      </div>
      <div className="apex-hero">
        <Herop
          source="https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-logo-hero-med-7x2-xl.png"
          game="Fifa"
          logo=""
        />

        <p>
          È più di un numero. Scopri subito i giocatori con valutazione più
          elevata di <br></br>FIFA 23!
        </p>
        <Button buttonSize="btn-medium" buttonStyle="btn--primary">
          Scopri le valutazioni
        </Button>
      </div>
    </div>
  );
}
