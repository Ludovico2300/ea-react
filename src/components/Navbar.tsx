import { midiaSrc, text } from "./utils/ContentNav";
import { useState, useEffect } from "react";
import { DarkNav } from "./DarkNav";
import { Dropdown } from "./utils/Dropdown";
import CardNav from "./utils/CardNav";
import { Link } from "react-router-dom";

export default function Navbar() {
  //media queris
  let x = window.matchMedia("(min-width: 1024px)").matches;
  let y = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
  let z = window.matchMedia("(max-width: 767px)").matches;
  let prevScrollpos = window.pageYOffset; // scroll page

  const [aside, setAside] = useState(false); //aside show add class
  const [up, setUp] = useState(true);
  const [, setTime] = useState(0);

  // refresh rate
  const getDate = () => {
    const date = new Date();
    const milliseconds = date.getTime();
    const seconds = milliseconds / 1000;
    setTime(seconds);
  };

  useEffect(() => {
    const interval: number | any = setTime((): number | any =>
      setInterval(() => getDate(), 500)
    );
    clearInterval(interval);
  }, []);
 

  //scroll functiont to darknav shows
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setUp(true);
    } else if (window.pageYOffset > 50) {
      setUp(false);
    }
    prevScrollpos = currentScrollPos;
  };

  function asideShow() {
    setAside(true);

  }

  function asideHidden() {
    setAside(false);
  }

  return (
    <div className="header">
      <div className="nav">
        <DarkNav data={aside} up={up} />

        <div className="flex-center-start " id="white-navbar">
          <div
            onClick={() => asideShow()}
            className="flex-center-center"
            id="aside-menu-icon"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <i className="fa-solid fa-bars hidden"></i>
          </div>
          <Link id="logo-home-navbar" to="/">
            <img
              className=""
              src="./assets/navbar/ea-wordmark-network-nav-coral.svg"
              alt="Electronics Arts Home"
            />
          </Link>

          {x && (
            <div className="flex-between-center" id="dropdown-menu-nav">
              {text.map((text) => (
                <Dropdown content={text} />
              ))}
            </div>
          )}

          <div className="flex-center-center">
            <div id="aside-navbar" className={aside ? "margin" : ""}>
              <div id="nav-title" className="flex-between-center">
                <h4>Tutti i giochi </h4>
                {z && (
                  <Link id="logo-home-navbar" to="#">
                    <img

                      src="./assets/navbar/ea-wordmark-network-nav-coral.svg"
                      alt="Electronics Arts Home"
                    />
                  </Link>
                )}
                {y && (
                  <Link id="logo-home-navbar" to="#">
                    <img
                      className=""
                      src="./assets/navbar/ea-wordmark-network-nav-coral.svg"
                      alt="Electronics Arts Home"
                    />
                  </Link>
                )}

                <i
                  onClick={() => asideHidden()}
                  className="fa-solid fa-xmark"
                ></i>
              </div>
              <div className="flex-center-center" id="Eaplay">
                <img
                  src="./assets/navbar/ea-purple.jpg"
                  alt="sfondo ea play"
                />
                <Link to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="30"
                    viewBox="0 0 240 101"
                  >
                    <path
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M94.84828,8.76968 L94.84828,61.49768 L105.24348,61.49768 L105.24348,42.28928 L118.04948,42.28928 C128.36828,42.28928 136.05148,35.13448 136.05148,25.41728 C136.05148,15.77488 128.66948,8.76968 118.42588,8.76968 L94.84828,8.76968 Z M117.29668,33.40208 L105.24348,33.40208 L105.24348,18.03528 L117.29668,18.03528 C122.26748,18.03528 125.73268,21.19888 125.73268,25.71888 C125.73268,30.23808 122.26748,33.40208 117.29668,33.40208 L117.29668,33.40208 Z M150.51348,5.75768 L140.94788,8.76968 L140.94788,61.49768 L150.51348,61.49768 L150.51348,5.75768 Z M173.78788,62.02568 C178.45908,62.02568 182.67748,60.29328 185.84108,57.35448 L185.84108,61.49768 L195.40668,61.49768 L195.40668,23.91128 L185.84108,23.91128 L185.84108,28.05288 C182.82748,25.04048 178.68388,23.30808 174.16588,23.30808 C164.37388,23.30808 155.48428,31.44288 155.48428,42.66608 C155.48428,53.88928 164.22228,62.02568 173.78788,62.02568 L173.78788,62.02568 Z M175.44588,53.43768 C169.64668,53.43768 164.97508,48.99328 164.97508,42.66608 C164.97508,36.33888 169.64668,31.89448 175.44588,31.89448 C181.32108,31.89448 185.91588,36.33888 185.91588,42.66608 C185.91588,48.99328 181.32108,53.43768 175.44588,53.43768 L175.44588,53.43768 Z M239.99988,23.91128 L229.98148,23.91128 L219.28428,46.05608 L208.36268,23.91128 L197.66708,23.91128 L213.78668,56.75168 L203.01508,78.14528 L213.41028,78.14528 L239.99988,23.91128 Z M54.90148,45.86888 L51.83028,40.96608 L42.86348,40.96608 L45.93948,36.05448 L48.77228,36.05448 L45.34828,30.58728 L35.79628,45.86888 L10.31268,45.86888 L16.44828,36.05448 L11.94308,36.05448 L15.00588,31.14328 L34.70428,31.14328 L31.63988,36.05448 L22.24468,36.05448 L19.17348,40.96608 L33.07148,40.96608 L45.34828,21.31808 L60.69108,45.86888 L54.90148,45.86888 Z M21.14388,21.31808 L41.34988,21.31808 L38.27868,26.23168 L18.07468,26.23168 L21.14388,21.31808 Z M35.14788,8e-05 C15.73708,8e-05 -0.00012,15.73808 -0.00012,35.15008 C-0.00012,54.56648 15.73708,70.29768 35.14788,70.29768 C54.55828,70.29768 70.29788,54.56648 70.29788,35.15008 C70.29788,15.73808 54.55828,8e-05 35.14788,8e-05 L35.14788,8e-05 Z"
                    />
                  </svg>
                </Link>
              </div>

              <div className="flex-between-center" id="nav-aside-card-menu">
                {x && midiaSrc.map((content) => <CardNav midia={content} />)}
              </div>

              {y && (
                <div id="dropdown-menu-nav-media">
                  {text.map((text) => (
                    <Dropdown content={text} />
                  ))}
                </div>
              )}

              {z && (
                <div className="flex-between-center" id="dropdown-menu-nav-media">
                  {text.map((text) => (
                    <Dropdown content={text} />
                  ))}
                </div>
              )}
            </div>
            <div id="obscure-body" className={aside ? "opacity" : ""}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
