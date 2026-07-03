import React from "react";
import "./App.css"
import Signup from "./components/signup.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/Login";
import ProtectedRouting from "./components/protectedRouting.jsx";

const App = () => {




  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ProtectedRouting>
          <Home /> </ProtectedRouting>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;