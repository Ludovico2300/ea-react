import ImageSlider from "./utils/Carousel";
import Slideshow from "./utils/Slider";

export default function Hero() {
  const slides = [
    {
      /* url: "https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-hero-medium-ratings-7x2-xl.jpg.adapt.crop7x2.1920w.jpg", */
      /* url: "https://calciodangolo.com/wp-content/uploads/Totti_DSC_9351.jpg", */
      url:"https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-vinicus-1920x1033-b34edb1f8674.jpg",
      title: "Fifa",
    },
    {
      /* url: "https://preview.redd.it/5p16231zzx651.png?auto=webp&s=70711c6980f7c26deddad956aefe6fc9c00038a0", */
      url: "https://i0.wp.com/clickwallpapers.net/wp-content/uploads/2021/11/clickwallpapers.net-apex-legends-4k-free-download-wallpaper-img_7-scaled-1.jpg?fit=2560%2C1440&ssl=1",
      title: "Apex",
    },
    {
      url: "https://i.pinimg.com/originals/10/d4/9b/10d49be6e34bb9d3d687ff1c10c1b05c.png",
      title: "The Sims 4",
    },
    {
      url: "https://wallpaper.dog/large/20505183.jpg",
      title: "Battlefield",
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
      <Slideshow/>
    </div>
  );
}
