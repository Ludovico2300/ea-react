const textArray = [
  "TIZIANO È FORTE",
  "LUDO FUMA WWF",
  "GABBO MANGIA ANACARDI",
  "WWF FUMA LUDO",
  "ITALO BEVE",
  "VIVA LA FREGNA",
  "ANGELO WOW PELATO!",
  "A GIULIA PIACE DEVELHOPE",
];

export default function Slideshow() {
  /*   const [index, setIndex] = useState(0);
  const timeoutRef: any = useRef(false);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex: number): any =>
          prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  },[index]); */  

  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {textArray.map((text, index): any => {
          return (
            <div className="slide" key={index}>
              <h1 className="text-slider">{text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
