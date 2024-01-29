import netlifyAuth from '../../netlifyAuth.js'

export default function NavBar() {

    let login = () => {
        console.log(netlifyAuth.user)
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user)
            setUser(user)
            netlifyAuth.closeModal()
        })
    }

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
                    Login
                </button>
            </div>
        </div>
    )
}