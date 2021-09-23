import React from "react";

import '../css/AboutUs.css';

class AboutUs extends React.Component {
    render(){
        return (
            <div className="about-us">
                <div className="shell">
                    <div className="about-us__container">
                        <div className="about-us__inner">
                            <h2 className="about-us__title">About us</h2>

                            <p className="about-us__content">
                                Are you boring by traveling by bus? <br />
                                Would you like to arrive faster? <br />
                                Your trip can be more comfortable. <br />
                                You can find more fiends and the traveling can be fun. <br />
                                And why not cheaper. <br />
                                Our website give you the ability to select who you want to travel with, <br />
                                when you want to travel and for what price!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;