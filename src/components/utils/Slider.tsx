import Marquee from "react-fast-marquee";
import SlideElement from "./SlideElement";

export default function Slideshow() {
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        <Marquee
          className="text-slider"
          speed={50}
          gradient={false}
          loop={0}
          delay={1}
        >
          <SlideElement />
        </Marquee>
      </div>
    </div>
  );
}
