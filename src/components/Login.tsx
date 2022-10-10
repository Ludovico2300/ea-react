import { useRef, useState } from "react";

export function Login() {
  const inputRefEmail: any = useRef();
  const inputRefPass: any = useRef();
  const [res, setRes] = useState()
  const [dataSend, setDataSend] = useState({ email: inputRefEmail, password: inputRefPass })


  function sendToServer() {
    setDataSend({
      email: inputRefEmail.current.value,
      password: inputRefPass.current.value
    })
 
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataSend)
  };
  fetch('http://localhost:3030/EA-server/signup', requestOptions)
    .then(response => response.json())
    .then(res => setRes(res));
 }



  return (
    <div className="conteiner-login">
      <div className="flex-column-center form" >
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
          <button value="Login" className="signin" onClick={sendToServer}>Login </button>
        </div>
      </div>
    </div>
  );
}
