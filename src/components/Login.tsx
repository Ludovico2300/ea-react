

export function Login() {



    return (
        <div className="conteiner-login">
            <form className="flex-column-center">
                <div className="input-container flex-column-center">
                    <h4>Username</h4>
                    <input type="text" name="uname" required className="input"/>
                </div>
                <div className="input-container flex-column-center">
                    <h4>Password</h4>
                    <input type="password" name="pass" required className="input"/>
                </div>
                <div className="button-container">
                    <input type="submit" value="Login" className="signin"/>
                </div>
            </form>
        </div>
    )
}