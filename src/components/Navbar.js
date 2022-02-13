import {Link, useLocation} from 'react-router-dom';

function Navbar(){

    const location = useLocation();

    const matchRoute = (route) => {
        if(route === location.pathname) {
            return true;    
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CryptoEarn</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={"nav-item "+ matchRoute('/') ? 'active': ''}>
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className={"nav-item "+ matchRoute('/about') ? 'active': ''}>
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;