
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';




class BarChart extends Component {
  constructor(props){
    super(props);
    this.state= {
      chartData:{
        labels: ['Boże Narodzenie', 'Urodziny', 'Imieniny'],
        datasets:[
          {
            label:'Ilość zakupionych prezentów',
            data:[
              65655,
              45215,
              45465
            ],
            backgroundColor:[
              'rgba(255, 99, 131, 0.6',
              'rgba(255, 199, 131, 0.6',
              'rgba(255, 99, 11, 0.6'
            ],
              
          }
        ]
      }
    } 

  }
  render() {
    return (
        <div className="chart">
          <Bar
          data={this.state.chartData}
          options={{}}
          />
        </div>
        
    );
  }
}

export default BarChart;
