import * as React from "react";
import './index.css';


class Square extends React.Component {
render() {
   return (
     <button className="square" onClick={() => this.props.onClick()}>
       {this.props.value}
     </button>
   );
 }
}

// tslint:disable-next-line:max-classes-per-file
class Board extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     squares: Array(9).fill(null),
   };
 }

handleClick(i) {
   const squares = this.state.squares.slice();
   squares[i] = 'X';
   this.setState({ squares });
 }

renderSquare(i) {
   return (
     <Square
       value={this.state.squares[i]}
       // tslint:disable-next-line:jsx-no-lambda
       onClick={() => this.handleClick(i)}
     />
   );
 }

render() {
   const status = 'Next player: X';

   return (
     <div>
       <div className="status">{status}</div>
       <div className="board-row">
         {this.renderSquare(0)}
         {this.renderSquare(1)}
         {this.renderSquare(2)}
       </div>
       <div className="board-row">
         {this.renderSquare(3)}
         {this.renderSquare(4)}
         {this.renderSquare(5)}
       </div>
       <div className="board-row">
         {this.renderSquare(6)}
         {this.renderSquare(7)}
         {this.renderSquare(8)}
       </div>
     </div>
   );
 }
}

export { Board, Square };