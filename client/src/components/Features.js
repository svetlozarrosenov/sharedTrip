import React from "react";

import '../css/Features.css';

class AboutUs extends React.Component {
    render(){
        return (
            <div className="features">
                <div className="shell">
                    <h2 className="features__title">About Us</h2>
                </div>

                <ul className="features-list">
                    <li className="feature">
                        <div className="feature__inner">
                            <h6 className="feature__title">Chose your driver</h6>

                            <p className="feature__content">You can select a driver you want to travel with</p>
                        </div>
                    </li>

                    <li className="feature">
                        <div className="feature__inner">
                            <h6 className="feature__title">Discuss the price</h6>

                            <p className="feature__content">You can have different price than the buss.</p>
                        </div>
                    </li>

                    <li className="feature">
                        <div className="feature__inner">
                            <h6 className="feature__title">Rate the driver</h6>

                            <p className="feature__content">You can rate the driver and you can select by rated drivers.</p>
                        </div>
                    </li>

                    <li className="feature">
                        <div className="feature__inner">
                            <h6 className="feature__title">Find more friends</h6>

                            <p className="feature__content">You can make a new friends with those trips.</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AboutUs;