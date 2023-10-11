import { text } from "./utils/ContentNav";
import { Dropdown } from "./utils/Dropdown";
import { Link } from "react-router-dom";
import { Button } from "./utils/Button";
import useAuthFirebase from "./hooks/useAuthFirebase";

export default function Navbar() {
  const { currentUser } = useAuthFirebase();
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

          <div className="flex-center-center">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--outline-black"
              onClick={"/auth"}
            />
            <div>
              {currentUser?.displayName
                ? `Benvenuto ${currentUser.displayName}`
                : "Effettua l'accesso!"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
