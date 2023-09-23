import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
export function App(props) {
    var xo=0;
    const [squares,setsquares]=useState(Array(10).fill(null));
    function hello(index){
        const us=[...squares];
        console.log(squares[9]);
        if(squares[9]==null){
             us[index]='X';
             us[9]='o';
        }
        else if(squares[9]=='o'){
             us[index]='O';
            us[9]=null;
        }

        setsquares(us);
    }
  return (
      <>
      <h1>X-O Game!</h1>
     <div className="yo">
      <Square onClick={() => hello(0)} x={squares[0]} />
      <Square onClick={() => hello(1)} x={squares[1]} />
      <Square onClick={() => hello(2)} x={squares[2]} />
    </div>

    <div>
      <Square onClick={() => hello(3)} x={squares[3]} />
      <Square onClick={() => hello(4)} x={squares[4]} />
      <Square onClick={() => hello(5)} x={squares[5]} />
    </div>

    <div>
      <Square onClick={() => hello(6)} x={squares[6]} />
      <Square onClick={() => hello(7)} x={squares[7]} />
      <Square onClick={() => hello(8)} x={squares[8]} />
    </div>
      </>
  );
}


function Square(props){  
    return(
        <>
        <button onClick={props.onClick}><b>{props.x}</b></button>
        </>
    );
}

export default App;
