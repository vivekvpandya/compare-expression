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
    console.log("Vivek");
    let expA = exp['expA'];
    let expB = exp['expB'];
    let greater = exp['greater'];
    console.log(expA);
    console.log(expB);
    console.log(greater);


    let expressionA = React.createElement(ArithmeticExpression, null);
    let expressionB = React.createElement(ArithmeticExpression, null);

    return React.createElement(Expressions, null, greater, "", expressionA, expressionB);
  });
  return (
    <div className="App">
        <Timebar />

{expressions}

    </div>
  );
}

export default App;
