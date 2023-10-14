import React from "react";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import Signout from "../components/Signout";
import useAuthFirebase from "../components/hooks/useAuthFirebase";
import { Link } from "react-router-dom";
import Tab from "../components/utils/Tab";
import useDatabaseFirebase from "../components/hooks/useDatabaseFirebase";

export default function Dashboard() {
  const { currentUser } = useAuthFirebase();
  const { currentUserCards } = useDatabaseFirebase();

  return (
    <div id="dashboard-outer-container">
      <div className="inner-container">
        {currentUser?.email ? (
          <>
            <div className="welcome-text">
              Benvenuto {currentUser.displayName}
            </div>
            <div className="button-container">
              {currentUser.email === "ludovicocolucci@gmail.com" && (
                <Link to="/create" className="create-link">
                  Create
                </Link>
              )}
              <Signout />
            </div>

            <div id="content-section">
              <h3 className="title-content">Your News</h3>
              <br></br>
              <div className="card-content-container">
                {currentUserCards.length > 0 ? (
                  currentUserCards.map((card) => {
                    return (
                      <Tab
                        key={card.id}
                        id={card.id}
                        source={card.source}
                        tag={card.tag}
                        title={card.title}
                        date={card.date}
                        content={card.content}
                      />
                    );
                  })
                ) : (
                  <h1>You have no News</h1>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="welcome-text">Effettua l'accesso!</div>
            <div className="login-signup-container">
              <Login />
              <div className="divider"></div>
              <Signup />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
