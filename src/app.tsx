import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { HealthcareSite } from "./components/healthcare-site";
import { InventoryApplication } from "./components/inventory-application";

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
        <Route
          path="/portfolio/inventory-application"
          element={<InventoryApplication />}
        ></Route>
      </Routes>
      <div className="bg-black text-white text-xs py-[5px] px-[30px]">
        Copyright © 2023 Nicolas Lee
      </div>
    </div>
  );
}

export default App;
