import { Title } from "./title";
import { Portfolio } from "./portfolio";
import { NewPortfolio } from "./new-portfolio";
import { Footer } from "./footer";

export const Home = () => {
  return (
    <div>
      <div
        id="top"
        className="pt-[120px] pb-[30px] sm:pb-[60px] space-y-[60px]"
      >
        <Title />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};
