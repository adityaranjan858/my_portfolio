import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/layout/Admin/Admin";
import Home from "./components/layout/Home";
import SignInForm from "./components/sign_in_form/SignInForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<Admin/>} />
      <Route path="/signIn" element={<SignInForm/>} />
    </Routes>
  );
}

export default App;
