import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect } from 'react';
import Expressions from './components/expressions';

function App() {

  var expressionData = { expressions : [
    {expA: "6 + 2", expB: "5 - 3", greater : 0, wait : 0},
    {expA: "6 + 1", expB: "14 - 3", greater : 1, wait : 300}
  ]
  };
  var expressions = expressionData["expressions"].map(function(exp) {
    let expA = exp['expA'];
    let expB = exp['expB'];
    let greater = exp['greater'];
    let wait = exp['wait'];
    return React.createElement(
      Expressions,
      { wait: wait,
        greater: greater,
        isCorrect : "",
        expressionA: expA,
        expressionB: expB
      }
    );
  });
  console.log(expressions)
  return (
    <div className="App">

 {expressions}

    </div>
  );
}

export default App;
