import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Labs from "./labs";
import Kanbas from "./kanbas";
import store from "./kanbas/store";
import { Provider } from "react-redux";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Kanbas" />} />
                        <Route path="/Labs/*" element={<Labs />} />
                        <Route path="/Kanbas/*" element={<Kanbas />} />
                    </Routes>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
