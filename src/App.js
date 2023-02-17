import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/HeaderApp";
import Home from "./pages/Home/Home.js";
import Book from "./pages/Book.js";
import Introduce from "./pages/Introduce.js";
import Login from "./pages/Login/Login.js";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/about" element={<Introduce />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<h1>Register</h1>} />
                    <Route
                        path="/forgot-password"
                        element={<h1>Forgot Password</h1>}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
