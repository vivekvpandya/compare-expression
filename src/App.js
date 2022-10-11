import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect } from 'react';
import Timebar from './components/timebar';
import Expressions from './components/expressions';

function App() {

  return (
    <div className="App">
        <Timebar />
<Expressions />


    </div>
  );
}

export default App;
