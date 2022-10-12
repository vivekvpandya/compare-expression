import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect } from 'react';
import Timebar from './components/timebar';
import Expressions from './components/expressions';

function App() {

  var expressionData = { expressions : [
    {expA: "6 + 2", expB: "5 - 3", greater : 0}
  ]
  };
  var expressions = expressionData["expressions"].map(function(exp) {
    let expA = exp['expA'];
    let expB = exp['expB'];
    let greater = exp['greater'];





    return React.createElement(Expressions, { greater: greater, isCorrect : "", expressionA: expA, expressionB: expB});
  });
  console.log(expressions)
  return (
    <div className="App">
        <Timebar />
  <Expressions />      

 {expressions}

    </div>
  );
}

export default App;
