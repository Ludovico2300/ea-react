import { useState } from "react";
import useAuthFirebase from "./hooks/useAuthFirebase";

export function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup } = useAuthFirebase();

  return (
    <div id="signup-form">
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

      <h1>Username</h1>
      <input
        placeholder="Username"
        type="text"
        name="username"
        required
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        value="Signup"
        className="signin"
        onClick={() => signup(email, password, username)}
      >
        Signup
      </button>
    </div>
  );
}
