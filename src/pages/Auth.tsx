import React from "react";
import { Login } from "../components/Login";
import { Singup } from "../components/Signup";

import Signout from "../components/Signout";
import useAuthFirebase from "../components/hooks/useAuthFirebase";

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
        {currentUser?.displayName ? (
          <>
            <div style={{ fontSize: "5rem", margin: "1rem" }}>
              Benvenuto {currentUser.displayName}
            </div>
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
