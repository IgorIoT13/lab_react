import React from "react";

import './App.css';
import Navpan from './components/nav/Navpan'
import Contend from "./components/header/Contend";
import Header from "./components/container/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
        <Navpan />
        <Header />
        <Contend />
        <Footer/>
    </div>

  );
}

export default App;
