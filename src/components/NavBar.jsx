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
                    onClick={() => console.log("login clicked")}
                >
                    Login
                </button>
            </div>
        </div>
    )
}