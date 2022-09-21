import { Link } from "react-router-dom";
export type DarkNavProps = {
  data: boolean;
  up: boolean;
};

export function DarkNav(props: DarkNavProps) {
  const { data, up } = props;

  return (
    <div
      className={`flex-center-end ${data ? "up" : ""} ${up ? "up" : ""}`}
      id="dark-navbar"
    >
      <Link to="#" className="icon-darknav flex-center-center" id="user-navbar">
        <i className="fa-regular fa-user"></i>
      </Link>
      <Link
        to="#"
        className="icon-darknav flex-center-center"
        id="quest-navbar"
      >
        <i className="fa-regular fa-question fa-solid"></i>
      </Link>
      <Link
        to="#"
        className="icon-darknav flex-center-center"
        id="ea-minilogo-navbar"
      >
        <img src="./assets/navbar/ea icon.png" alt="logo EA games" style={{filter: "invert()", opacity: .5}}/>
      </Link>
    </div>
  );
}
