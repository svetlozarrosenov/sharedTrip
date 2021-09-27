import React from 'react';
import Intro from '../components/Intro';
import Features from '../components/Features';
import LatestTrips from '../components/LatestTrips';

class Home extends React.Component {

    render(){
        return (<div>
                <Intro />
                <Features />
                <LatestTrips />
            </div>);
    }
}

export default Home;