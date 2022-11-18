import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React from "react";
import Form from "./components/Form";
import GetData from "./components/GetData";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<div><Form /><br></br><GetData /></div>}/>
      </Routes>
    </Router>
  );
}
