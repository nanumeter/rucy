import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      layout: {
        title: "Sankey",
        width: 1118,
        height: 772,
        font: {
          size: 10
        },
        updatemenus: []
      }, frames: [], config: {}
    };
  }
  componentDidMount() {
    //this.timerID = setInterval(
    //  () => this._getMovies(),
    //  3000
    //);
    this._getMovies();
  }

  componentWillUnmount() {
    //clearInterval(this.timerID);
  }

  _getMovies = async () => {
    const json = await this._callApi();
    this.setState({
      data: [
        {
          type: "sankey",
          domain: {
            x: [
              0,
              1
            ],
            y: [
              0,
              1
            ]
          },
          orientation: "h",
          valueformat: ".0f",
          valuesuffix: "",
          node: {
            pad: 15,
            thickness: 15,
            line: {
              color: "black",
              width: 0.5
            },
            label: json.label,
            color: []
          },
          link: {
            source: json.source,
            target: json.target,
            value: json.value,
            color: json.color,
            label: json.link_label
          }
        }
      ]
    });
    console.log(this.state.data);
  }

  _callApi = () => {
    return fetch('http://localhost:8000/api/sankeychart/?format=json')
      .then(potato => potato.json())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Plot
          data={this.state.data}
          layout={this.state.layout}
          frames={this.state.frames}
          config={this.state.config}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
      </div>
    );
  }
}

export default App;
