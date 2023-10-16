import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div id="no-page-container">
      <div className="main-container">
        <h1>Questa pagina non è ancora pronta!</h1>
        <h1>Torna alla Home o accedi!</h1>
        <div className="button-section">
          <button>
            <Link to={"/"} className="links">
              Home
            </Link>
          </button>
          <button>
            <Link to={"/dashboard"} className="links">
              Accedi
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
