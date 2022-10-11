import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export function Login() {
  const inputRefEmail: any = useRef();
  const inputRefPass: any = useRef();
  const [response, setResponse]: any = useState();

  function sendToServer() {
    axios
      .post(`http://localhost:3030/EA-server/signin`, {
        email: inputRefEmail.current.value,
        password: inputRefPass.current.value,
      })

      .then((res) => {
        setResponse(res);
        if (res.data.data.status === 200) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  }

  return (
    <div className="conteiner-login">
      <ToastContainer />
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
          <button value="Login" className="signin" onClick={sendToServer}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
