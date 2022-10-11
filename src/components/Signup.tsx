import { useRef, useState } from "react";
import axios from "axios";

export function Singup() {
    const [ready, setReady] = useState()
    const inputRefUser: any = useRef();
    const inputRefEmail: any = useRef();
    const inputRefPass: any = useRef();
    const [res, setRes] = useState()
    const [dataSend, setDataSend]: any = useState()


    function sendToServer() {
        setDataSend({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: inputRefEmail.current.value,
                password: inputRefPass.current.value,
                user: inputRefUser.current.value,
            })
        })
    }

    if(dataSend){
    try{
        fetch('http://localhost:3030/EA-server/signup', (dataSend))
        .then(response => response.json())
        .then(res => setRes(res));
    }catch{
    throw new Error( "Errore in chiamata POST ")
    }
}



    return (
        <div className="conteiner-singup">
            <div className="flex-column-center form" >
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
                    <input
                        type="password"
                        name="pass"
                        required
                        className="input"
                    />
                </div>

                <div className="button-container">
                    <button value="singup" className="signin" onClick={sendToServer}>singup </button>
                </div>
            </div>
        </div>
    );
}
