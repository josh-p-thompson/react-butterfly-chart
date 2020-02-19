import React, { Component } from 'react';
import './ButterflyChart.css';
import ChartRow from '../ChartRow/ChartRow';
import Title from '../Title/Title';

class ButterflyChart extends Component {
 render() {
    const {titleLeft, titleRight, leftData, rightData, labelField, dataField, leftColor, rightColor, onBarHover} = this.props;

    return (
    <div className="ButterflyChart">
        <Title
            className="Title"
            titleLeft={titleLeft}
            titleRight={titleRight}
        />
        <div className="ButterflyChart-left">
        {
        leftData.map(row => (
            <ChartRow
                orientation='left'
                row={row}
                labelField={labelField}
                dataField={dataField}
                color={leftColor}
                onBarHover={onBarHover}
            />
            ))
            }
        </div>
        <div className="ButterflyChart-divider"></div>
        <div className="ButterflyChart-right" >
        {
        rightData.map(row => (
        <ChartRow
            orientation='right'
            row={row}
            labelField={labelField}
            dataField={dataField}
            color={rightColor}
            onBarHover={onBarHover}
        />
        ))
        }
        </div>
    </div>
    );
  }
}
export default ButterflyChart;