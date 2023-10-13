import React from "react";
import { Login } from "../components/Login";
import { Singup } from "../components/Signup";
import Signout from "../components/Signout";
import useAuthFirebase from "../components/hooks/useAuthFirebase";
import { Link } from "react-router-dom";
import Tab from "../components/utils/Tab";
import useDatabaseFirebase from "../components/hooks/useDatabaseFirebase";

export default function Dashboard() {
  const { currentUser } = useAuthFirebase();
  const { currentUserCards } = useDatabaseFirebase();

  return (
    <div
      style={{
        margin: "5rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {currentUser?.email ? (
          <>
            <div style={{ fontSize: "5rem", margin: "1rem" }}>
              Benvenuto {currentUser.displayName}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              {currentUser.email === "ludovicocolucci@gmail.com" && (
                <Link
                  to={"/create"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "1rem",
                    padding: "7px",
                    fontSize: "2rem",
                    backgroundColor: "transparent",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                >
                  Create
                </Link>
              )}

              <Signout />
            </div>

            {/* MY POSTS SECTION */}
            <div id="content-section" style={{ backgroundColor: "white" }}>
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
            <div style={{ fontSize: "5rem", margin: "1rem" }}>
              Effettua l'accesso!
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
              }}
            >
              <Login />
              <div
                style={{
                  height: "100%",
                  width: "1rem",
                  background: "black",
                  border: "solid 1px black",
                  borderRadius: "5px",
                }}
              ></div>
              <Singup />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
