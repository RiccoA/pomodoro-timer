import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {

  constructor(props){
    super(props);
    const defaultTime = 25 * 60 * 1000;
    this.state = {defaultTime: defaultTime, time: defaultTime};
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e) {
    this.setState({time: this.state.defaultTime});
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  // ticks down the time by 1 seconds if able to
  tick() {
    if (this.state.time <= 0) return;

    this.setState({time: this.state.time - 1000})
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayMinutes(milliSecs) {
    return Math.floor((milliSecs/1000/60) << 0);
  }

  displaySeconds(milliSecs) {
    return Math.floor((milliSecs/1000) % 60);
  }

  render() {
    return (
      <div>
        <h1>{this.displayMinutes(this.state.time)}:{this.displaySeconds(this.state.time)}</h1>
        <button onClick={this.onClick}>Reset</button>
      </div>
    );
  }
}


// ========================================
  
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);
