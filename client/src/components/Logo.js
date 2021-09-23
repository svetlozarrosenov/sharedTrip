import React from 'react';
import '../css/Logo.css';

class Logo extends React.Component {
    render(){
        return(
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/trip.png'} alt="logo" />
            </div>
        );
    }
}

export default Logo;