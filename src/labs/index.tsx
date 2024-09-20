import {Link, Navigate, Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./toc";

export default function Labs(){
    return(
        <div>
            <h1>Peiyi Wu | cs5610.20596</h1>
            <Link to="https://github.com/pew35/kanbas-react-web-app/tree/main">my github</Link>
            <h1>Labs</h1>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1/>} />
                <Route path="Lab2" element={<Lab2/>} />
            </Routes>
        </div>
                
    );
}