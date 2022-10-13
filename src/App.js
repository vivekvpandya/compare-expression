import './App.css';
import React, { useEffect } from "react";
import { useState } from 'react';
import Expressions from './components/expressions';

function App() {
  const [count, setCount] = useState(0);
  var expressionData = { expressions : [
    {id: "exp0", expA: "6 + 2", expB: "5 - 3", greater : 0, showAfter : 0, hideAfter: 6000},
    {id: "exp1", expA: "6 + 1", expB: "14 - 3", greater : 1, showAfter : 6000, hideAfter: 12000}
  ]
  };
  function incrementCount () {
    console.log("count :" + count)
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("effect " + count)
  }, [count])

  var expressions = expressionData["expressions"].map(function(exp) {
    let expA = exp['expA'];
    let expB = exp['expB'];
    let greater = exp['greater'];
    let showAfter = exp['showAfter'];
    let hideAfter = exp['hideAfter'];
    let id = exp['id'];

    return React.createElement(
      Expressions,
      {
        id : id,
        greater: greater,
        isCorrect : "",
        expressionA: expA,
        expressionB: expB,
        showAfter: showAfter,
        hideAfter: hideAfter,
        updateCount : incrementCount,
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
