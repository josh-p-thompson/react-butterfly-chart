# react-butterfly-chart

React Butterfly Chart allows you to make a simple, elegant butterfly chart component. 

Butterfly Charts are best suited for comparing two groups with the same paramaters, like election results or population data.

## Demo

![](demo_gif.gif)

## Installation

```
npm install react-butterfly-chart
```

## Example use

```
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
```
Data should be provided as objects where each data is in "row" format. For example: 
```
data = {
    "0":{
        "group": "81-100", 
        "population": "30M",
    },
    "1":{
        "group": "41-60", 
        "population": "45M",
    }
}
```

## License

This project is licensed under the MIT License.