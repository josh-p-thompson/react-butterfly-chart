import React, {Component} from 'react'
import {render} from 'react-dom'
import { ButterflyChart } from '../../src';

import electionData from './electionData.json';
let leftElectionData = []; 
let rightElectionData = [];     
for (let row of Object.values(electionData)) {
  if (row.party === 'democrat') {
    row.candidatevotes = row.candidatevotes.toLocaleString()
    leftElectionData.push(row); 
  } else if (row.party === 'republican') {
    row.candidatevotes = row.candidatevotes.toLocaleString()
    rightElectionData.push(row);
  }
}

import populationData from './populationData.json';
let leftPopulationData = []; 
let rightPopulationData = [];     
for (let row of Object.values(populationData)) {
  if (row.sex === 'male') {
    leftPopulationData.push(row); 
  } else if (row.sex === 'female') {
    rightPopulationData.push(row);
  }
}

class Demo extends Component {

  render() {
    return <div>
      <div>
        <h1>Election Data</h1>
        <ButterflyChart
          titleLeft="Democrats"
          titleRight="Republicans"
          leftData={leftElectionData}
          rightData={rightElectionData}
          labelField="state"
          dataField="candidatevotes"
          leftColor="#2AA1EC" 
          rightColor="#FE6A59"
        />
      </div>
      <br></br>
      <br></br>
      <div>
        <h1>Population Data</h1>
        <ButterflyChart
          titleLeft="Male"
          titleRight="Female"
          leftData={leftPopulationData}
          rightData={rightPopulationData}
          labelField="group"
          dataField="population"
          leftColor="#043ea7" 
          rightColor="#c37ef0"
        />
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
