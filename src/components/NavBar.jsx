import { useStore } from './netlifyAuth.js'
import { login } from './netlifyAuth.js'

export default function NavBar() {

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
                    {!!!useStore.getState()?.user?.id ? <>Login</> : <>Logged in</>}
                </button>
            </div>
        </div>
    )
}