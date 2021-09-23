import React from 'react';
import Header from '../components/Header.js';
import Intro from '../components/Intro.js';
import AboutUs from '../components/AboutUs.js';
import Footer from '../components/Footer.js';

class Home extends React.Component {

    render(){
        return (<div>
                <Header />
                <Intro />
                <AboutUs />
                <Footer />
            </div>);
    }
}

export default Home;