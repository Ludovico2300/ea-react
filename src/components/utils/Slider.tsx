import React, { useEffect, useRef } from "react";

const colors = ["#252525", "#00C49F", "#FFBB28", "#0088FE", "#00C49F"];
const delay = 1000;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef: any = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        Hello
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>
    </div>
  );
}
