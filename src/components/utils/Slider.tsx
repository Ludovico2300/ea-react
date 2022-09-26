import Marquee from "react-fast-marquee";
import SlideElement from "./SlideElement";

export default function Slideshow() {
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        <Marquee
          className="text-slider"
          speed={95}
          gradient={false}
          loop={0}
        >
          <SlideElement />
        </Marquee>
      </div>
    </div>//Gabbo  Mode
  );
}
