import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Btn.css';

class Btn extends React.Component {
    render(){
        return (
            <Link className="btn" to={this.props.link}>{this.props.name}</Link>
        );
    }
}

export default Btn;