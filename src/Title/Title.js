import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
 render() {
    const {titleLeft, titleRight} = this.props;
    return (
    <div className="Title">
        <div className="Title-left">
            <h2>{titleLeft}</h2>
        </div>
        <div className="Title-right">
            <h2>{titleRight}</h2>
        </div>
    </div>
    );
  }
}
export default Title;