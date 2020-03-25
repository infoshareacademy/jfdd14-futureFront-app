import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';




class PieChart extends Component {
  constructor(props){
    super(props);
    this.state= {
      chartData:{
        labels: ['Babcia', 'Dziadek', 'Wujek'],
        datasets:[
          {
            label:'Ilość zakupionych prezentów',
            data:[
              99655,
              45215,
              45465
            ],
            backgroundColor:[
              'rgba(123, 199, 231, 0.6',
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
          <Pie
          data={this.state.chartData}
          options={
              {
                  onElementsClick: (elems) => {},
          getElementsAtEvent: (elems) => {},
        }
    }
          />
        </div>
        
    );
  }
}

export default PieChart;
