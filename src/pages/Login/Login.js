import React, { useState } from "react";
import "./Loginform.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", username, password);
    };

    return (
        <div className="login-page">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Login</div>
                <div className="subtitle">Welcome back, my friend</div>

                <div className="input-container ic2">
                    <input
                        type="text"
                        className="input"
                        placeholder=" "
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Email</label>
                </div>

                <div className="input-container ic2">
                    <input
                        type="password"
                        id="password"
                        className="input"
                        placeholder=" "
                        lang="en"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="cut"></div>
                    <label className="placeholder">Password</label>
                    <span className="show-password">
                        <i className="fas fa-eye"></i>
                    </span>
                </div>
                <button type="submit" className="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
