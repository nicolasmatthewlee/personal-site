import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDigitalOcean,
  faNodeJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import expressIcon from "../assets/icons/express.svg";
import { BackButton } from "./back-button";
import IMAGE_SM from "../assets/healthcare-site/healthcare-site-sm.png";
import IMAGE_MD from "../assets/healthcare-site/healthcare-site-md.png";
import IMAGE_LG from "../assets/healthcare-site/healthcare-site-lg.png";

export const HealthcareSite = () => {
  return (
    <div
      className="pt-[90px] pb-[30px] px-[30px] flex flex-col space-y-[45px] text-gray-800
    sm:px-[75px]"
    >
      <BackButton to="/#portfolio" />

      <div className="flex flex-col space-y-[30px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">
          healthcare site
        </h1>
        <div className="flex justify-center sm:space-x-[30px] md:space-x-[30px]">
          <div className="hidden sm:inline flex-1 h-[600px] overflow-scroll shadow bg-gray-100">
            <img
              className="object-scale-down"
              src={IMAGE_SM}
              alt="healthcare website on small viewport"
            />
          </div>
          <div className="hidden md:inline flex-1 h-[600px] overflow-scroll shadow bg-gray-100">
            <img
              className="object-scale-down"
              src={IMAGE_MD}
              alt="healthcare website on medium viewport"
            />
          </div>
          <div className="flex-1 h-[600px] overflow-scroll shadow bg-gray-100">
            <img
              className="object-scale-down"
              src={IMAGE_LG}
              alt="healthcare website on large viewport"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-[5px] pt-[15px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">
          features
        </h1>
        <ul className="list-disc ml-[17px]">
          <li>responsive design</li>
          <li>form validation</li>
          <li>automated email response</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-[10px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">stack</h1>
        <div className="flex space-x-[10px]">
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon>
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
        <a href="http://24.199.116.13/">
          <button className="hover:underline">view live</button>
        </a>
      </div>

      <BackButton to="/#portfolio" />
    </div>
  );
};
