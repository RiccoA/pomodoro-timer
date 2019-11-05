import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {

  constructor(props){
    super(props);
    const defaultTime = 25 * 60 * 1000;
    this.state = {
      defaultTime: defaultTime,
      time: defaultTime,
      running: false
    };

    this.onReset = this.onReset.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
  }
  
  onReset(e) {
    this.setState({time: this.state.defaultTime, running: false});
  }

  onStop(e) {
    this.setState({running: false});
  }

  onStart(e) {
    this.setState({running: true});
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  // ticks down the time by 1 seconds if able to
  tick() {
    if (this.state.time <= 0) return;
    if (!this.state.running) return;

    this.setState({time: this.state.time - 1000})
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1><Display time={this.state.time}/></h1>
        <button onClick={this.onStart}>Start</button>
        <button onClick={this.onStop}>Stop</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

class Display extends React.Component
{
  displayMinutes(milliSecs) {
    const minutes = Math.floor((milliSecs/1000/60) << 0);
    return this.formatClockDigits(minutes);
  }

  displaySeconds(milliSecs) {
    const seconds =  Math.floor((milliSecs/1000) % 60);
    return this.formatClockDigits(seconds);
  }

  formatClockDigits(n) {
    return n > 9 ? "" + n : "0" + n;
  }

  render () {
    return (
      <>
        {this.displayMinutes(this.props.time)}:{this.displaySeconds(this.props.time)}
      </>
    ); 
  }
}

// ========================================
  
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);
