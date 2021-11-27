import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UpdateForm from "./components/UpdateForm";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                <div className="max-w-xl mx-auto rounded-md mt-32">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/user/:id"} element={<UpdateForm />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
