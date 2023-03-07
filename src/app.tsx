import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { HealthcareSite } from "./components/healthcare-site";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/portfolio/healthcare-site"
          element={<HealthcareSite />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
