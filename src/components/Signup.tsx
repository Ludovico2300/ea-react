import { useRef, useState } from "react";

export function Singup() {
    const inputRefUser: any = useRef();
    const inputRefEmail: any = useRef();
    const inputRefPass: any = useRef();
    const [res, setRes] = useState()
    const [dataSend, setDataSend] = useState({ email: inputRefEmail, password: inputRefPass, user: inputRefUser })


    function sendToServer() {
        setDataSend({
            email: inputRefEmail.current.value,
            password: inputRefPass.current.value,
            user: inputRefUser.current.value,
        })

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSend)
        };
        try {
            fetch('http://localhost:3030/EA-server/signup', requestOptions)
                .then(response => response.json())
                .then(res => setRes(res));
        } catch (err) {
            console.log(err)
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
