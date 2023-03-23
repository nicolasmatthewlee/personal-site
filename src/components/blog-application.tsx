import { BackButton } from "./back-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDigitalOcean,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import tailwindIcon from "../assets/icons/tailwind.svg";
import expressIcon from "../assets/icons/express.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import passportIcon from "../assets/icons/passport.png";
import jestIcon from "../assets/icons/jest.svg";
import IMAGE_HOME from "../assets/blog-application/blog-application-home.png";

export const BlogApplication = () => {
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
          blog application
        </h1>
        <div className="shadow w-full pt-[56%] relative bg-gray-100">
          <img
            className="absolute top-0 h-full w-full"
            src={IMAGE_HOME}
            alt="blog homepage"
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
          <li>account creation and login</li>
          <li>session persistence with cookies</li>
          <li>write and publish articles</li>
          <li>save articles</li>
          <li>notifications for posts liked</li>
          <li>testing suite with Jest, SuperTest</li>
          <li>database protected with password hashing</li>
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
          <img
            className="h-[16px] stroke-5 rounded-sm"
            src={passportIcon}
            alt="passportjs"
          />
          <img className="h-[16px] stroke-5" src={jestIcon} alt="jestjs" />
          <img className="h-[16px] stroke-5" src={mongodbIcon} alt="mongodb" />
          <FontAwesomeIcon icon={faDigitalOcean}></FontAwesomeIcon>
        </div>
      </div>

      <div className="pb-[30px]">
        <a href="http://24.199.116.13:5001/">
          <button className="hover:underline">view live</button>
        </a>
      </div>

      <BackButton to="/#portfolio" />
    </div>
  );
};
