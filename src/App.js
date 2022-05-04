import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./components/landing/Landing";
import SignUp from "./components/loginSignUp/SignUp.js";
import Login from "./components/loginSignUp/Login.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} / >
        </Routes> 
      </BrowserRouter>
  
    </div>
  );
}

export default App;
