import {Link, Navigate, Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./toc";

export default function Labs(){
    return(
        <div className="p-3">
            <h1>Labs</h1>
            <h3>Peiyi Wu | cs5610.20596</h3>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1/>} />
                <Route path="Lab2" element={<Lab2/>} />
                <Route path="Lab3/*" element={<Lab3 />} />
            </Routes>
        </div>
                
    );
}