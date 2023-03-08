import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDigitalOcean,
  faNodeJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { BackButton } from "./back-button";
import expressIcon from "../assets/icons/express.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import IMAGE_INVENTORY from "../assets/inventory-application/inventory.png";

export const InventoryApplication = () => {
  return (
    <div
      className="pt-[90px] pb-[30px] px-[30px] flex flex-col space-y-[45px] text-gray-800
    sm:px-[75px]"
    >
      <BackButton to="/#portfolio" />

      <div className="flex flex-col space-y-[30px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">
          Inventory Application
        </h1>
        <div className="shadow w-full pt-[55%] relative bg-gray-100">
          <img
            className="object-scale-down absolute top-0 h-full w-full"
            src={IMAGE_INVENTORY}
            alt="inventory application"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-[5px] pt-[15px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">
          features
        </h1>
        <ul className="list-disc ml-[17px]">
          <li>create new items</li>
          <li>create new categories</li>
          <li>update existing items</li>
          <li>delete items</li>
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
          <img className="h-[16px] stroke-5" src={mongodbIcon} alt="mongodb" />
          <FontAwesomeIcon icon={faDigitalOcean}></FontAwesomeIcon>
        </div>
      </div>

      <div className="pb-[30px]">
        <a href="http://24.199.116.13:3000/">
          <button className="hover:underline">view live</button>
        </a>
      </div>

      <BackButton to="/#portfolio" />
    </div>
  );
};
