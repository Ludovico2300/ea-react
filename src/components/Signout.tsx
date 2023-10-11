import React from "react";
import { ToastContainer } from "react-toastify";
import useAuthFirebase from "./hooks/useAuthFirebase";

export default function Signout() {
  const { signout } = useAuthFirebase();

  return (
    <div className="conteiner-singup">
      <ToastContainer style={{ fontSize: "1.5rem" }} />
      <div className="form">
        <div className="button-container">
          <button value="singup" className="signin" onClick={signout}>
            Signout
          </button>
        </div>
      </div>
    </div>
  );
}
