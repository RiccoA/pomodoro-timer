import React from 'react';
import Button from '@material-ui/core/Button';
import { Display } from './Display';

export class Timer extends React.Component {
  constructor(props) {
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
  onReset() {
    this.setState({ time: this.state.defaultTime, running: false });
  }
  onStop() {
    this.setState({ running: false });
  }
  onStart() {
    this.setState({ running: true });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }
  // ticks down the time by 1 seconds if able to
  tick() {
    if (this.state.time <= 0)
      return;
    if (!this.state.running)
      return;
    this.setState({ time: this.state.time - 1000 });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
    <div>
      <h1><Display time={this.state.time} /></h1>
      <Button variant="contained" color="primary" onClick={this.onStart}>Start</Button>
      <Button variant="contained" color="secondary" onClick={this.onStop}>Stop</Button>
      <Button variant="contained" onClick={this.onReset}>Reset</Button>
    </div>
    );
  }
}
