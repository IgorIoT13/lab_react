import React from "react";

import './App.css';
import Navpan from './components/nav/Navpan'
import Contend from "./components/header/Contend";
import Header from "./components/container/Header";


function App() {
  return (
    <div className="App">
        <Navpan />
        <Header />
        <Contend />
    </div>
  );
}

export default App;
