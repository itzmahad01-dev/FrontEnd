import { useNavigate } from "react-router-dom"
import heroImg from "../assets/img.png";
import "../App.css"



import React from 'react'

const Home = () => {
       const navigate = useNavigate()

const signuphandler = () => {
    navigate("/signup");
}
const loginhandler = () => {
    navigate("/login");
}

  return (
    <div>
      <div className="home">
      <header>
        <div className="logo">
          <h1 className="LOGO">LOGO</h1>
        </div>

        <div className="nav">
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">Contact</a>
        </div>

        <div className="btn">
          <button onClick={loginhandler} className="log">Log In</button>
          <button  onClick={signuphandler} className="sign">Sign Up</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="left">
          <p className="welcome">Welcome to My Website</p>

          <h1 className="12">
            Hi, I'm <span className="Mahad">Mahad</span>
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
          <img src={heroImg} alt="Hero Image" className="pic" />
        </div>
      </section>
      </div>
    </div>
  )
}

export default Home

