import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDigitalOcean,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { BackButton } from "./back-button";
import expressIcon from "../assets/icons/express.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import d3Icon from "../assets/icons/d3.png";
import IMAGE_FOODSTATS from "../assets/foodstats/foodstats.png";

export const FoodStats = () => {
  return (
    <div
      className="pt-[90px] pb-[30px] px-[30px] flex flex-col space-y-[45px] text-gray-800
    sm:px-[75px]"
    >
      <BackButton to="/#portfolio" />

      <div className="flex flex-col space-y-[30px]">
        <h1
          className="uppercase text-xl font-medium tracking-wide
        md:text-2xl"
        >
          FoodStats
        </h1>
        <div className="shadow w-full pt-[71%] relative bg-gray-100">
          <img
            className="object-scale-down absolute top-0 h-full w-full rounded-sm"
            src={IMAGE_FOODSTATS}
            alt="inventory application"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-[5px] pt-[15px]">
        <h1
          className="uppercase text-xl font-medium tracking-wide
        md:text-2xl"
        >
          features
        </h1>
        <ul className="list-disc ml-[17px]">
          <li>search for foods</li>
          <li>explore data with interactive visualizations</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-[10px]">
        <h1
          className="uppercase text-xl font-medium tracking-wide
        md:text-2xl"
        >
          stack
        </h1>
        <div className="flex space-x-[10px]">
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
          <img className="h-[16px] stroke-5 p-[1px]" src={d3Icon} alt="d3" />
          <img
            className="h-[16px] stroke-5"
            src={tailwindIcon}
            alt="tailwind"
          />
          <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
          <img
            className="h-[16px] stroke-5"
            src={expressIcon}
            alt="expressjs"
          />
          <FontAwesomeIcon icon={faDigitalOcean}></FontAwesomeIcon>
        </div>
      </div>

      <div className="pb-[30px]">
        <a href="https://foodstats.net">
          <button className="hover:underline">view live</button>
        </a>
      </div>

      <BackButton to="/#portfolio" />
    </div>
  );
};
