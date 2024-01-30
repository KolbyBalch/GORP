import { useEffect, useState } from "react";
import { useStore, login } from './netlifyAuth.js'

export default function NavBar() {
    const [buttonContent, setButtonContent] = useState("Login");
    useEffect(() => {
        if (useStore.getState()?.user) {
            setButtonContent("Logged in!");
        } else {
            setButtonContent("Login");
        }
    }, [useStore])

    return (
        <div className="nav-bar sticky" id="navBar">
            <div>
            </div>
            <div>
                <a className="header-link" href='/'>
                    <strong>GORP</strong>
                </a>
            </div>
            <div className="login-div">
                <button 
                    className="login-button" 
                    onClick={login}
                >
                    {buttonContent}
                </button>
            </div>
        </div>
    )
}