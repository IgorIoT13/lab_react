import React from "react";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Navpan from './components/Home/nav/Navpan'
import Contend from "./components/Home/container/Contend";
import Header from "./components/Home/header/Header";
import Footer from "./components/Home/footer/Footer";

import Catalog from "./components/catalog/Catalog";
import Item from "./components/item/item";

const test = {
    "header":"ahfkjajhfkjha",
    "img": "",
    "text": "Text"

}

function App() {
  return (
    <div className="App">
        <Navpan />
        <Header />
        <Routes>
            <Route path="/" element={<Contend />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/item" element={<Item uper = {test} />} />
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;
