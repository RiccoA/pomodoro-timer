import React from 'react';

export class Display extends React.Component {
  displayMinutes(milliSecs) {
    const minutes = Math.floor((milliSecs / 1000 / 60) << 0);
    return this.formatClockDigits(minutes);
  }
  displaySeconds(milliSecs) {
    const seconds = Math.floor((milliSecs / 1000) % 60);
    return this.formatClockDigits(seconds);
  }
  formatClockDigits(n) {
    return n > 9 ? "" + n : "0" + n;
  }
  render() {
    return (<>
      {this.displayMinutes(this.props.time)}:{this.displaySeconds(this.props.time)}
    </>);
  }
}
