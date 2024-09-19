import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Labs from './labs';
import Kanbas from './kanbas';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div >
        <h1>Peiyi Wu | cs5610.20596</h1>
        <Link to="https://github.com/pew35/kanbas-react-web-app/tree/main">my github</Link>
        <br />
        <br />
        <Link to="/Labs"> Labs </Link> | <Link to="/Kanbas"> Kanbas </Link>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path = "/Labs/*" element = {<Labs />} />
          <Route path = "/Kanbas/*" element = {<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
