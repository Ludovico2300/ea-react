
import AllCards from "../components/AllCards";
import AllTabs from "../components/AllTabs";
import Hero from "../components/Hero";
import ImageSlider from "../components/utils/Carousel";

export default function Home() {
  const slides = [
    { url: "https://media.contentapi.ea.com/content/dam/eacom/images/2022/09/f23-hero-medium-ratings-7x2-xl.jpg.adapt.crop7x2.1920w.jpg", title: "Fifa" },
    { url: "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-02/homepage-reveal-25th-aug/videos/bf-2042-section-video-s02-gameplay-xl.mp4", title: "Battlefield" },
    { url: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-2022/common/homepage-hero-ferrari/f122-ferrari-homepage-16x9-xl-1920x1080.mp4", title: "F1" },
    { url: "https://media.contentapi.ea.com/content/dam/apex-legends/mobile/common/season-2-5/apex-mobile-section-bg-texture-hyperbeat-xl.jpg.adapt.1920w.jpg", title: "Apex" },
    { url: "", title: "" },
  ];

  return (
    <div>
      <ImageSlider slides={slides}/>
      <Hero />
      <AllCards />
      <AllTabs />
    </div>
  );
}
