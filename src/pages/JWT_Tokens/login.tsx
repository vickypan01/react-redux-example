import React, { useState } from "react";
import "../../styles/login.css";
import { useLoginUserMutation } from "../../Features/Services/userAuth";
import { API_BASE_URL } from "../../api_urls/common_constant";
import { useNavigate } from "react-router-dom";

// username: 'emilys',
// password: 'emilyspass',
// expiresInMins: 30

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { data, error, isLoading }] = useLoginUserMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        url: API_BASE_URL.BASE_URL_EIGHT,
        method: "POST",
        body: { username, password },
      }).unwrap();

      console.log("Login success:", response);
      navigate("/loginCredentials", {
        state: { userData: response },
      });
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome to Learning App</h2>
        <p>Please login to your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p style={{ color: "red" }}>Invalid credentials</p>}

        <span className="signup-text">
          Don’t have an account? <a href="#">Sign Up</a>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
