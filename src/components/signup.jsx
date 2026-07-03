import React, { useState } from "react";
import axios from "axios";
import "../App.css"
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://auth-back-end-six.vercel.app/api/auth/signup",
        user
      );

      console.log(res.data);
      alert("Signup Successful");
      if (res) {
        navigate("/")
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Signup Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-container">
  <form className="signup-form" onSubmit={handleSubmit}>
    <h2>Sign Up</h2>

    <input
      type="text"
      name="username"
      placeholder="Username"
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
    />

    <button type="submit">Create Account</button>

    <p>
      Already have an account? <a href="/login">Login</a>
    </p>
  </form>
</div>
    </div>
  );
};

export default Signup;