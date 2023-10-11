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
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {currentUser?.displayName ? (
        <Signout />
      ) : (
        <>
          <Login />
          <Singup />
        </>
      )}
    </div>
  );
}
