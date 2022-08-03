import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";

class EChartTwo extends Component {
  getOption = () => {
    return {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius: 0,
        padding: 10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12
        }
      },
      legend: {
        data: [{
          value: 5,
          name: ''
        }, {
          value: 15,
          name: ''
        }, {
          value: 40,
          name: ''
        }, {
          value: 40,
          name: ''
        }]
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#2E86C1','#138D75','#BA4A00','#D4AC0D'],
        label:{
          show: false,
        },  
        data: [{
          value: 5,
          name: 'For the founder'
        }, {
          value: 15,
          name: 'For the dev team to ensure essential growth of the project'
        }, {
          value: 40,
          name: 'For the reward pool for Rock Farming pools'
        }, {
          value: 40,
          name: 'For reward pool for Staking pools'
        }]
      }
      ]
    };
  };
  render() {
    return <ReactEcharts option={this.getOption()} style={{ height: "400px" }} />;
  }
}

export default EChartTwo;