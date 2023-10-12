import React from "react";
import { Login } from "../components/Login";
import { Singup } from "../components/Signup";

import Signout from "../components/Signout";
import useAuthFirebase from "../components/hooks/useAuthFirebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { currentUser } = useAuthFirebase();

  return (
    <div
      style={{
        margin: "2rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "50vh",
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
            {currentUser.email === "ludovicocolucci@gmail.com" && (
              <Link
                to={"/post"}
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
