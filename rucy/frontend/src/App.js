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
      rows: [],
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

  componentDidMount(){
    this.timerID = setInterval(
      () => this._getMovies(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _getMovies = async () => {
    const rows = await this._callApi();
    this.setState({
      rows
    })
  }

  _callApi = () => {
    return fetch('http://localhost:8000/api/sankeychart/?format=json')
      .then(potato => potato.json())
      .then(json => json.data)
      .catch(err => console.log(err));
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
          width="90%"
          height="600px"
          chartEvents={this.chartEvents}
        />
      </div>
    );
  }
}

export default App;
