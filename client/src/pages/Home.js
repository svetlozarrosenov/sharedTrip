import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Features from '../components/Features';
import Footer from '../components/Footer';

class Home extends React.Component {

    render(){
        return (<div>
                <Header />
                <Intro />
                <Features />
                <Footer />
            </div>);
    }
}

export default Home;