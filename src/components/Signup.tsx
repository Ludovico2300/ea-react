import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthFirebase from "./hooks/useAuthFirebase";

export function Singup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup } = useAuthFirebase();

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h4>Username</h4>
            <input
              type="text"
              name="username"
              required
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/*           <div className="input-container ">
            <h4>Conferm Password</h4>
            <input type="password" name="pass" required className="input"  />
          </div> */}
        </div>

        <div className="button-container">
          <button
            value="singup"
            className="signin"
            onClick={() => signup(email, password, username)}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
