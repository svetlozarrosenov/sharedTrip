import React from 'react';
import Btn from './Btn';

import '../css/LatestTrips.css';

class LatestTrips extends React.Component {
    render(){
        return (
            <div className="latest-trips">
                <div className="shell">
                    <h2 className="latest-trips__title">Latest Trips</h2>

                    <ul className="latest-trips-list">
                        <li className="latest-trip">
                            <div className="latest-trip__driver">
                                <div className="latest-trip__driver-avatar" style={{ backgroundImage: "url(/avatar.jpg)" }}></div>
                                
                                <div className="latest-trip__driver-inner">
                                    <div className="latest-trip__driver-stars">* * * * * *</div>
                                    <h6 className="latest-trip__driver-name">John Smith</h6>

                                </div>
                            </div>

                            <div className="latest-trip__inner">
                                <h6 className="latest-trip__current-town">from Sofia to Varna</h6>

                                <p className="latest-trip__start-date">start date: 02 aug 2021</p>

                                <p className="latest-trip__start-time">start time: 12:30</p>
                            </div>
                        </li>
                        
                        <li className="latest-trip">
                            <div className="latest-trip__driver">
                                <div className="latest-trip__driver-avatar" style={{ backgroundImage: "url(/avatar.jpg)" }}></div>
                                
                                <div className="latest-trip__driver-inner">
                                    <div className="latest-trip__driver-stars">* * * * * *</div>
                                    <h6 className="latest-trip__driver-name">John Smith</h6>

                                </div>
                            </div>

                            <div className="latest-trip__inner">
                                <h6 className="latest-trip__current-town">from Sofia to Varna</h6>

                                <p className="latest-trip__start-date">start date: 02 aug 2021</p>

                                <p className="latest-trip__start-time">start time: 12:30</p>
                            </div>
                        </li>
                        
                        <li className="latest-trip">
                            <div className="latest-trip__driver">
                                <div className="latest-trip__driver-avatar" style={{ backgroundImage: "url(/avatar.jpg)" }}></div>
                                
                                <div className="latest-trip__driver-inner">
                                    <div className="latest-trip__driver-stars">* * * * * *</div>
                                    <h6 className="latest-trip__driver-name">John Smith</h6>

                                </div>
                            </div>

                            <div className="latest-trip__inner">
                                <h6 className="latest-trip__current-town">from Sofia to Varna</h6>

                                <p className="latest-trip__start-date">start date: 02 aug 2021</p>

                                <p className="latest-trip__start-time">start time: 12:30</p>
                            </div>
                        </li>
                        
                        <li className="latest-trip">
                            <div className="latest-trip__driver">
                                <div className="latest-trip__driver-avatar" style={{ backgroundImage: "url(/avatar.jpg)" }}></div>
                                
                                <div className="latest-trip__driver-inner">
                                    <div className="latest-trip__driver-stars">* * * * * *</div>
                                    <h6 className="latest-trip__driver-name">John Smith</h6>

                                </div>
                            </div>

                            <div className="latest-trip__inner">
                                <h6 className="latest-trip__current-town">from Sofia to Varna</h6>

                                <p className="latest-trip__start-date">start date: 02 aug 2021</p>

                                <p className="latest-trip__start-time">start time: 12:30</p>
                            </div>
                        </li>
                        
                        <li className="latest-trip">
                            <div className="latest-trip__driver">
                                <div className="latest-trip__driver-avatar" style={{ backgroundImage: "url(/avatar.jpg)" }}></div>
                                
                                <div className="latest-trip__driver-inner">
                                    <div className="latest-trip__driver-stars">* * * * * *</div>
                                    <h6 className="latest-trip__driver-name">John Smith</h6>

                                </div>
                            </div>

                            <div className="latest-trip__inner">
                                <h6 className="latest-trip__current-town">from Sofia to Varna</h6>

                                <p className="latest-trip__start-date">start date: 02 aug 2021</p>

                                <p className="latest-trip__start-time">start time: 12:30</p>
                            </div>
                        </li>
                        
                        <li className="latest-trip">
                            <div className="latest-trip__driver">
                                <div className="latest-trip__driver-avatar" style={{ backgroundImage: "url(/avatar.jpg)" }}></div>
                                
                                <div className="latest-trip__driver-inner">
                                    <div className="latest-trip__driver-stars">* * * * * *</div>
                                    <h6 className="latest-trip__driver-name">John Smith</h6>

                                </div>
                            </div>

                            <div className="latest-trip__inner">
                                <h6 className="latest-trip__current-town">from Sofia to Varna</h6>

                                <p className="latest-trip__start-date">start date: 02 aug 2021</p>

                                <p className="latest-trip__start-time">start time: 12:30</p>
                            </div>
                        </li>
                    </ul>

                    <div className="latest-trips__actions">
                        <Btn link="/trips" name="View All" />
                    </div>
                </div>
            </div>
        );    
    }
}

export default LatestTrips;