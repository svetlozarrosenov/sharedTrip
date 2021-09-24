import React from "react";
import { Link } from 'react-router-dom';
import Logo from './Logo.js';

import '../css/Footer.css';

class Footer extends React.Component {
    render(){
        return (
        <footer className="footer">
            <div className="shell">
                <div className="footer__container">
                    <div className="footer__head">
                        <Logo />
                    </div>

                    <div className="footer__address">
                        Lorem Ipsum is simply dummy 
                        text of the printing and 
                        typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever ..
                    </div>

                    <div className="footer__nav">
                        <ul>
                            <li className="footer__nav-item">
                                <Link to="/">Home</Link>
                            </li>

                            <li className="footer__nav-item">
                                <Link to="/about">About</Link>
                            </li>

                            <li className="footer__nav-item">
                                <Link to="/trips">Trips</Link>
                            </li>

                            <li className="footer__nav-item">
                                <Link to="/login">Login</Link>
                            </li>

                            <li className="footer__nav-item">
                                <Link to="/logout">Logout</Link>
                            </li>

                            <li className="footer__nav-item">
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;