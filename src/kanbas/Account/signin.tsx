import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

import * as client from "./client";
export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        try {
            const user = await client.signin(credentials);
            if (!user) return;
            dispatch(setCurrentUser(user));
            navigate("/Kanbas/Dashboard");
        } catch (error) {
            console.log(error);
            alert("Invalid username or password");
        }

    };
    const tip = [
        {
            "username": "elf_archer",
            "password": "legolas123",
            "firstName": "Legolas",
            "lastName": "Greenleaf",
            "email": "legolas@mirkwood.com",
            "dob": "2879-07-15",
            "role": "FACULTY",
            "loginId": "001234569S",
            "section": "S101",
            "lastActivity": "2020-11-11",
            "totalActivity": "21:32:43"
        },
        {
            "username": "dark_knight",
            "password": "wayne123",
            "firstName": "Bruce",
            "lastName": "Wayne",
            "email": "bruce@wayne.com",
            "dob": "1972-02-19",
            "role": "STUDENT",
            "loginId": "001234562S",
            "section": "S101",
            "lastActivity": "2020-11-02",
            "totalActivity": "15:32:43"
        }
    ];

    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                defaultValue={credentials.username}
                onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                }
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"
                defaultValue={credentials.password}
                onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                }
            />
            <button
                onClick={signin}
                id="wd-signin-btn"
                className="btn btn-primary w-100"
            >
                Sign in
            </button>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
                Sign up
            </Link>

            <div className="mt-4">
                <h5>User Tips</h5>
                {tip.map((user) => (
                    <div key={user.username} className="border rounded p-2 mb-2">
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Password:</strong> {user.password}</p>
                        <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
