import React from 'react';
import FunctionalComponent from './FunctionalComponent/FunctionalComponent';
import { ClassComponent2 as Div } from './ClassComponent/ClassComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <FunctionalComponent></FunctionalComponent>
      <Div></Div>
    </div>
  );
}

export default App;
