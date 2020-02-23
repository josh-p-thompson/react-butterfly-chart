import React, { Component } from 'react';
import './ChartRow.css';

class ChartRow extends Component {
 render() {
    const {orientation, row, labelField, dataField, color} = this.props;

    if (orientation === 'left') {
        return (
        <div className="ChartRow ChartRow-left">
            <div className="ChartRow-barLabel"> 
                {row[labelField]}
            </div>
            <div className="u-dottedLine"></div>
            <div className="ChartRow-bar LeftBar" style={{width: row.percentage + "%", backgroundColor: color}}>
                {row[dataField]}
            </div>
        </div>
        );
    } else if (orientation === 'right'){
        return (
        <div className="ChartRow">
            <div className="ChartRow-bar RightBar" style={{width: row.percentage + "%", backgroundColor: color}}>
                {row[dataField]}
            </div>
            <div className="u-dottedLine"></div>
            <div className="ChartRow-barLabel"> 
                {row[labelField]}
            </div>
        </div>
        );
    }
  }
}
export default ChartRow;