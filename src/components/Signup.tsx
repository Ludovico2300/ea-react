import { useRef } from "react";
import { useApi } from "./hooks/useApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Singup() {
  const inputRefUser: any = useRef();
  const inputRefEmail: any = useRef();
  const inputRefPass: any = useRef();
  const inputcheckRefPass: any = useRef();

  const { fetch, toast } = useApi({
    path: "signup",
  });

  function onfetch() {
    if (inputRefPass.current.value == inputcheckRefPass.current.value) {
      fetch({
        path: "signup",
        user: {
          email: inputRefEmail.current.value,
          password: inputRefPass.current.value,
          username: inputRefUser.current.value,
        },
      });
      return toast;
    }else{
      alert("Password not match (ㆆ_ㆆ)")
    }
  }




  return (
    <div className="conteiner-singup">
      <ToastContainer style={{ fontSize: "1.5rem" }} />
      <div className="form">
        <div className="first">
          <div className="input-container ">
            <h4>Email</h4>
            <input
              type="text"
              name="email"
              required
              className="input"
              ref={inputRefEmail}
            />
          </div>
          <div className="input-container">
            <h4>Username</h4>
            <input
              type="text"
              name="user"
              required
              className="input"
              ref={inputRefUser}
            />
          </div>
        </div>

        <div className="second">
          <div className="input-container ">
            <h4>Password</h4>
            <input
              type="password"
              name="pass"
              required
              className="input"
              ref={inputRefPass}
            />
          </div>
          <div className="input-container ">
            <h4>Conferm Password</h4>
            <input type="password" name="pass" required className="input" ref={inputcheckRefPass} />
          </div>
        </div>

        <div className="button-container">
          <button value="singup" className="signin" onClick={onfetch} >
            Singup
          </button>
        </div>
      </div>
    </div>
  );
}
