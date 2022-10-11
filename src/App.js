import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect } from 'react';
import Timebar from './components/timebar';
import Expressions from './components/expressions';
import ArithmeticExpression from './components/arithmatic-expression';

function App() {

  var expressionData = { expressions : [
    {expA: "6 + 2", expB: "5 - 3", greater : 0}
  ]
  };
  var expressions = expressionData["expressions"].map(function(exp) {
    let expA = exp['expA'];
    let expB = exp['expB'];
    let greater = exp['greater'];



    let expressionA = React.createElement(ArithmeticExpression, {expression : expA});
    let expressionB = React.createElement(ArithmeticExpression, {expression : expB});

    return React.createElement(Expressions, { greater: greater, isCorrect : "", expressionA: expressionA, expressionB: expressionB});
  });
  console.log(expressions)
  return (
    <div className="App">
        <Timebar />

{expressions}

    </div>
  );
}

export default App;
