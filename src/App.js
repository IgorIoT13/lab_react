import React from "react";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Navpan from './components/nav/Navpan'
import Contend from "./components/header/Contend";
import Header from "./components/container/Header";
import Footer from "./components/footer/Footer";

import Catalog from "./components/catalog/Catalog";

function App() {
  return (
    <div className="App">
        <Navpan />
        <Header />
        <Routes>
            <Route path="/" element={<Contend />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;
