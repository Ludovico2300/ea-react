import { useState } from "react";
import useAuthFirebase from "./hooks/useAuthFirebase";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuthFirebase();

  return (
    <div id="login-form">
      <h1>Email</h1>
      <input
        placeholder="Email"
        type="text"
        name="email"
        required
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h1>Password</h1>
      <input
        placeholder="Password"
        type="password"
        name="pass"
        required
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        value="Login"
        className="signin"
        onClick={() => login(email, password)}
      >
        Login
      </button>
    </div>
  );
}
