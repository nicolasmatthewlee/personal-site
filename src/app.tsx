import React from "react";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { Portfolio } from "./components/portfolio";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <div className="p-[30px] pb-[90px] pt-[90px] space-y-[30px]">
        <Title />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
