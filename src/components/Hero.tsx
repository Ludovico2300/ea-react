import Marquee from "react-fast-marquee";
import SlideHero from "./utils/Slidehero";
import Slideshow from "./utils/Slider";

export default function Hero() {
  return (
    <div className="hero">  
      <div className="hero-img">
        <Marquee
          gradient={false}
          speed={50}
          direction={"right"}
          loop={0}
          pauseOnHover={true}
          delay={1}
        >
          <div>
            <SlideHero />
          </div>
        </Marquee>
      </div>
      <Slideshow />
    </div>
  );
}
