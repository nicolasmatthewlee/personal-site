import React from "react";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { Portfolio } from "./components/portfolio";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div id="top" className="py-[30px] pt-[120px] pb-[60px] space-y-[60px]">
        <Title />
        <Portfolio />
        <Footer />
      </div>
      <div className="bg-black text-white text-xs py-[5px] px-[30px]">
        Copyright © 2023 Nicolas Lee
      </div>
    </div>
  );
}

export default App;
