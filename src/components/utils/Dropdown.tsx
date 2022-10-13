import { useState } from "react";
import { Link } from "react-router-dom";

export type DropdownProps = {
  content: {
    title: string;
    ul: {
      titleUl?: string[];
      link: string[];
      link1?: string[];
    };
  };
};

export function Dropdown(props: DropdownProps) {

  const [show, setShow] = useState(Boolean)
  const [showli, setShowli] = useState(Boolean)
  const [showli1, setShowli1] = useState(Boolean)

    const {
      content: {
        title,
        ul: { titleUl, link, link1 },
      },
    } = props;

    function handleShow() {
      setShow(!show)
    }
    function handleShowli() {
      setShowli(!showli)
    }
    function handleShowli1() {
      setShowli1(!showli1)
    }

    return (
      <div id="dropdown-menu-item-nav" className={show ? "show" : ""}>

        <div id="drop-title" onClick={() => handleShow()} className="flex-between-center">
          <h4>{title}</h4>
          {/* title of dropdown */}
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className=" dropdown-menu hidden">

          {titleUl ? (
            <div className="divide media">
              <ul onClick={() => handleShowli()} className={showli ? "show title-ul" : "title-ul"} aria-label={titleUl[0]}>
                {link.map((name, i /* second cicle links */) => (
                  <li key={i + name}>
                    <Link className="dropdown-item" to="#">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={showli1 ? "show title-ul" : "title-ul"} onClick={() => handleShowli1()} aria-label={titleUl[1]}>
                {link1?.map((name, i /* second cicle links */) => (
                  <li key={i + name}>
                    <Link className="dropdown-item" to="#">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul>
              {link.map((link, i /* if dont have columns only cicle links */) => (
                <li key={link + i}>
                  <Link className="dropdown-item" to="#">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
