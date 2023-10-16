import React from "react";
import { Link } from "react-router-dom";
import useAuthFirebase from "../components/hooks/useAuthFirebase";

export default function NotAllowed() {
  const { currentUser } = useAuthFirebase();

  return (
    <div id="no-page-container">
      <div className="main-container">
        <h1>Non sei autorizzato...</h1>
        <div className="button-section">
          <button>
            <Link to={"/"} className="links">
              Home
            </Link>
          </button>
          {!currentUser && (
            <button>
              <Link to={"/dashboard"} className="links">
                Accedi
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
