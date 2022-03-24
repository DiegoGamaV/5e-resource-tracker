import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/class" element={<ClassPage />}></Route>
        <Route path="/character" element={<CharactersPage />}></Route>
        <Route path="/character/:id" element={<CharacterDetailPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
