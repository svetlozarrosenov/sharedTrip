import React from "react";
import { Link } from 'react-router-dom'
import '../css/Nav.css';

class Nav extends React.Component {
    render(){
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/trips">Trips</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/logout">Logout</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;