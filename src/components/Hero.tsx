import Marquee from "react-fast-marquee";
import Herop from "./utils/Herop";
import Slideshow from "./utils/Slider";



export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-img">
        <Marquee gradient={false} speed={80} direction={"right"} loop={0} pauseOnHover={true}>
          <div className="herop-img">
          <Herop 
            source="https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-vinicus-1920x1033-b34edb1f8674.jpg"
            game="FIFA13"
            logo=""
          />
          <Herop
            source="https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/homepage/common/bf-2042-section-bg-homepage-hero-keyart-xl.jpg.adapt.320w.jpg"
            game=""
            logo=""
          />
          <Herop
            source="https://media.contentapi.ea.com/content/dam/ea/f1/f1-2022/common/china-return-fpo-1-jpg.adapt.1456w."
            game="F1"
            logo=""
          />
           <Herop
            source="https://media.contentapi.ea.com/content/dam/ea/f1/f1-2022/common/china-return-fpo-1-jpg.adapt.1456w."
            game="F1"
            logo=""
          />
          </div>
        </Marquee>
        
      </div>
      <Slideshow />
    </div>
  );
}
