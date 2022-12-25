import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/allCountries/Countries";
import Country from "./components/singleCountry/Country";
import "./style.css";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route  path="/:name" element={<Country />} />
        <Route path="/"  element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
