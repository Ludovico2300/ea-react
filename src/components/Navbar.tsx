import { text } from "./utils/ContentNav";
import { Dropdown } from "./utils/Dropdown";
import { Link } from "react-router-dom";

export default function Navbar() {
  //media queris
  let x = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <div className="header">
      <div className="nav">
        <div className="flex-center-start " id="white-navbar">
          <div
            /* onClick={() => asideShow()} */
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
                <Dropdown content={text} key={`${text}-key-${Math.random()}`} />
              ))}
            </div>
          )}

          <div
            style={{
              width: "80rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Link to={"/auth"}>
              <div
                style={{
                  fontSize: "2rem",
                  color: "black",
                }}
              >
                Area Personale
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
