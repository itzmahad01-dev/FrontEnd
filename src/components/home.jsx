import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/img.png";
import "../App.css";
import Contact from "./contact";
import About from "./about";
import Footer from "./footer";

const Home = () => {
  const navigate = useNavigate();

  // Check Login
  const token = localStorage.getItem("token");

  const signuphandler = () => {
    navigate("/signup");
  };

  const loginhandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successfully");

    navigate("/login");

    // Refresh page to update button
    window.location.reload();
  };
const user = JSON.parse(localStorage.getItem("user"));
const username = user?.username || "Friend";
  return (
    <div className="home">
      <header>
        <div className="logo">
          <h1 className="LOGO">LOGO</h1>
        </div>

        <div className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="btn">
          {token ? (
            <button onClick={logoutHandler} className="log">
              Logout
            </button>
          ) : (
            <>
              <button onClick={loginhandler} className="log">
                Log In
              </button>

              <button onClick={signuphandler} className="sign">
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      <section className="hero-section">
        <div className="left">
          <p className="welcome">Welcome to My Website</p>

          <h1 className="hero-title">
            <span className="Mahad"> Hi {username}</span>,
            <br />
           I'm <span className="Mahad">Mahad</span>
            <br />
            MERN Stack Developer
          </h1>

          <p className="desc">
            I create modern, responsive and user-friendly websites that help
            businesses grow and stand out in the digital world.
          </p>

          <button>Explore More →</button>
        </div>

        <div className="right">
          <img src={heroImg} alt="Hero" className="pic" />
        </div>
      </section>

      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;