import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthFirebase from "./hooks/useAuthFirebase";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuthFirebase();

  return (
    <div className="conteiner-login">
      <ToastContainer style={{ fontSize: "1.5rem" }} />
      <div className="flex-column-center form">
        <div className="input-container flex-column-center">
          <h4>Email</h4>
          <input
            placeholder="Email"
            type="text"
            name="email"
            required
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container flex-column-center">
          <h4>Password</h4>
          <input
            placeholder="Password"
            type="password"
            name="pass"
            required
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            value="Login"
            className="signin"
            onSubmit={() => login(email, password)}
            onClick={() => login(email, password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
