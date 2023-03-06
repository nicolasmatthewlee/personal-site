import React from "react";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { Portfolio } from "./components/portfolio";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="">
      <Header />
      <div className="py-[30px] pt-[120px] pb-[60px] space-y-[60px]">
        <div className="space-y-[60px]">
          <Title />
          <Portfolio />
        </div>
        <Footer />
      </div>
      <div className="bg-black text-white text-xs py-[5px] px-[30px]">
        Copyright © 2023 Nicolas Matthew Lee
      </div>
    </div>
  );
}

export default App;
