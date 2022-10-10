import { useState } from "react";

export function Login() {
  const handleSubmit = (event: any) => {
    // Prevent page reload
    event.preventDefault();
  };

  const [values, setValues] = useState("");
  
  const handleChangevalues = (value: any) => {
    setValues((prevValue) => ({
      //@ts-ignore
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    console.log(values)
  };

  const sendToServer = () => {
    console.log("Inviato!")
  }

  /* const handleLogin=() =>{
    this.setState({
        login : true
    })       
}
const handleResetState =() => {
    this.setState({
        username: '',
        password :'',
        checked : '',
        login: false ,
        disabled : ''
    })
} */

  return (
    <div className="conteiner-login">
      <div className="flex-column-center form" onSubmit={handleSubmit}>
        <div className="input-container flex-column-center">
          <h4>Email</h4>
          <input
            type="text"
            name="email"
            required
            className="input"
            onChange={handleChangevalues}
          />
        </div>
        <div className="input-container flex-column-center">
          <h4>Password</h4>
          <input
            type="password"
            name="pass"
            required
            className="input"
            onChange={handleChangevalues}
          />
        </div>
        <div className="button-container">
          <input type="submit" value="Login" className="signin" onClick={sendToServer}/>
        </div>
      </div>
    </div>
  );
}
