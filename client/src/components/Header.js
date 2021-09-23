import '../css/Header.css';
import React from "react";
import Logo from './Logo';
import Nav from './Nav';

class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <div className="shell">
                    <div className="header__container">
                        <div className="header__head">
                            <Logo />
                        </div>

                        <div className="header__foot">
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
            );
    }
}

export default Header;