import netlifyAuth from '../../netlifyAuth.js'

export default function NavBar() {

    let login = () => {
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user)
            setUser(user)
            netlifyAuth.closeModal()
        })
    }
    
    let logout = () => {
        netlifyAuth.signout(() => {
            setLoggedIn(false)
            setUser(null)
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