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
        
        <Link to="/Labs"> Labs </Link> | <Link to="/Kanbas"> Kanbas </Link>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path = "/Labs/*" element = {<Labs />} />
          <Route path = "/Kanbas/*" element = {<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
