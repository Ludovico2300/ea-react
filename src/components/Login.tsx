import { useRef } from "react";
import { useApi } from "./hooks/useApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const inputRefEmail: any = useRef();
  const inputRefPass: any = useRef();

  const { fetch, toast } = useApi({
    path: "signin",
  });

  function onfetch() {

    fetch({
      path: "signin",
      user: {
        email: inputRefEmail.current.value,
        password: inputRefPass.current.value,
      },
    });
    
    inputRefEmail.current.value = ""
    inputRefPass.current.value = ""

    return toast
  }

  return (
    <div className="conteiner-login">
      <ToastContainer style={{ fontSize: "1.5rem" }} />
      <div className="flex-column-center form">
        <div className="input-container flex-column-center">
          <h4>Email</h4>
          <input
            type="text"
            name="email"
            required
            className="input"
            ref={inputRefEmail}
          />
        </div>
        <div className="input-container flex-column-center">
          <h4>Password</h4>
          <input
            type="password"
            name="pass"
            required
            className="input"
            ref={inputRefPass}
          />
        </div>
        <div className="button-container">
          <button value="Login" className="signin" onClick={onfetch}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
