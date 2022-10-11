import { useRef, useState } from "react";
import { useApi } from "./hooks/useApi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Singup() {
  const inputRefUser: any = useRef();
  const inputRefEmail: any = useRef();
  const inputRefPass: any = useRef();
  /*   const [response, setResponse]: any = useState(); */

  const { fetch, res, toast } = useApi({
    path: "signup",
    user: {
      email: inputRefEmail.current.value,
      password: inputRefPass.current.value,
      username: inputRefUser.current.value,
    },
  });

  console.log(res);

  /*    axios
      .post(`http://localhost:3030/EA-server/signup`, {
        email: inputRefEmail.current.value,
        password: inputRefPass.current.value,
        username: inputRefUser.current.value,
      })

      .then((res) => {
        setResponse(res);
        if (res.data.status === 200) {
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
      }); */

  return (
    <div className="conteiner-singup">
      <ToastContainer style={{ fontSize: "1.5rem" }} />
      <div className="form">
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
          <h4>Verify(Password)</h4>
          <input type="password" name="pass" required className="input" />
        </div>

        <div className="button-container">
          <button value="singup" className="signin" onClick={fetch}>
            singup{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
