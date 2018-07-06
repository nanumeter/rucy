import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from 'react-google-charts';

class App extends Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      rows: [
        ['Brazil', 'Portugal', 5],
        ['Brazil', 'France', 1],
        ['Brazil', 'Spain', 1],
        ['Brazil', 'England', 1],
        ['Canada', 'Portugal', 1],
        ['Canada', 'France', 5],
        ['Canada', 'England', 1],
        ['Mexico', 'Portugal', 1],
        ['Mexico', 'France', 1],
        ['Mexico', 'Spain', 5],
        ['Mexico', 'England', 1],
        ['USA', 'Portugal', 1],
        ['USA', 'France', 1],
        ['USA', 'Spain', 1],
        ['USA', 'England', 5],
        ['Portugal', 'Angola', 2],
        ['Portugal', 'Senegal', 1],
        ['Portugal', 'Morocco', 1],
        ['Portugal', 'South Africa', 3],
        ['France', 'Angola', 1],
        ['France', 'Senegal', 3],
        ['France', 'Mali', 3],
        ['France', 'Morocco', 3],
        ['France', 'South Africa', 1],
        ['Spain', 'Senegal', 1],
        ['Spain', 'Morocco', 3],
        ['Spain', 'South Africa', 1],
        ['England', 'Angola', 1],
        ['England', 'Senegal', 1],
        ['England', 'Morocco', 2],
        ['England', 'South Africa', 7],
        ['South Africa', 'China', 5],
        ['South Africa', 'India', 1],
        ['South Africa', 'Japan', 3],
        ['Angola', 'China', 5],
        ['Angola', 'India', 1],
        ['Angola', 'Japan', 3],
        ['Senegal', 'China', 5],
        ['Senegal', 'India', 1],
        ['Senegal', 'Japan', 3],
        ['Mali', 'China', 5],
        ['Mali', 'India', 1],
        ['Mali', 'Japan', 3],
        ['Morocco', 'China', 5],
        ['Morocco', 'India', 1],
        ['Morocco', 'Japan', 3]
      ],
      columns: [
        {
          type: 'string',
          label: 'From',
        },
        {
          type: 'string',
          label: 'To',
        },
        {
          type: 'number',
          label: 'Weight',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Chart
          chartType="Sankey"
          rows={this.state.rows}
          columns={this.state.columns}
          options={this.state.options}
          graph_id="Sankey"
          width="50%"
          height="400px"
          chartEvents={this.chartEvents}
        />
      </div>
    );
  }
}

export default App;
