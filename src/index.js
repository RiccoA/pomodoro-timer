import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: Date.now()};
    this.onReset = this.onReset.bind(this);
  }
  
  onReset(e) {
    this.setState({time: Date.now()});
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
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     renderSquare(i) {
//       return <Square />;
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
  // ========================================
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('root')
  );
  