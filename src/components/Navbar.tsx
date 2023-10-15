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
          <Link className="dashboard-link" to={"/dashboard"}>
            Accedi
          </Link>
        </div>
      </div>
    </div>
  );
}
