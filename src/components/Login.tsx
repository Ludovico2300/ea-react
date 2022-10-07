

export function Login() {



    return (
        <div className="conteiner-login">
            <form className="flex-column-center">
                <div className="input-container flex-column-center">
                    <h4>Username :</h4>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container flex-column-center">
                    <h4>Password :</h4>
                    <input type="password" name="pass" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="sing-in" />
                </div>
            </form>
        </div>
    )
}