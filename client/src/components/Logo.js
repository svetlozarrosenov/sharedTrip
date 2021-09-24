import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Logo.css';

class Logo extends React.Component {
    render(){
        return(
            <div className="logo">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/trip.png'} alt="logo" />
                </Link>
            </div>
        );
    }
}

export default Logo;