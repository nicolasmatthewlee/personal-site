import { BackButton } from "./back-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDigitalOcean,
  faNodeJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import expressIcon from "../assets/icons/express.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import passportIcon from "../assets/icons/passport.png";

import IMAGE_UNREGISTERED from "../assets/message-board/message-board-unregistered-user.png";
import IMAGE_REGISTERED from "../assets/message-board/message-board-registered-user.png";
import IMAGE_ADMIN from "../assets/message-board/message-board-admin.png";

export const MessageBoard = () => {
  return (
    <div
      className="pt-[90px] pb-[30px] px-[30px] flex flex-col space-y-[45px] text-gray-800
    sm:px-[75px]"
    >
      <BackButton to="/#portfolio" />

      <div className="flex flex-col space-y-[30px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">
          message board
        </h1>
        <div
          className="flex flex-col w-full 
          sm:flex-row"
        >
          <div
            className="flex-1 hidden pr-[30px] 
          md:inline"
          >
            <img
              src={IMAGE_UNREGISTERED}
              alt="message board for unregistered user"
            />
            <p
              className="text-center
            sm:text-xs xl:text-base"
            >
              unregistered user
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full pt-[170%] bg-gray-100 relative">
              <img
                src={IMAGE_REGISTERED}
                alt="message board for unregistered user"
                className="max-w-[400px] absolute top-0
                sm:max-w-full"
              />
            </div>
            <p
              className="text-center hidden
            sm:inline sm:text-xs xl:text-base"
            >
              registered user
            </p>
          </div>
          <div
            className="flex-1 hidden pl-[30px]
          sm:inline"
          >
            <img src={IMAGE_ADMIN} alt="message board for unregistered user" />
            <p
              className="text-center
            sm:text-xs xl:text-base"
            >
              admin user
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-[5px] pt-[15px]">
        <h1 className="uppercase text-3xl font-medium tracking-wide">
          features
        </h1>
        <ul className="list-disc ml-[17px]">
          <li>account creation and login</li>
          <li>session persistence with cookies</li>
          <li>message posting</li>
          <li>account tiers with privileges</li>
          <li>database protected with password hashing</li>
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
          <img
            className="h-[16px] stroke-5 rounded-sm"
            src={passportIcon}
            alt="passportjs"
          />
          <img className="h-[16px] stroke-5" src={mongodbIcon} alt="mongodb" />
          <FontAwesomeIcon icon={faDigitalOcean}></FontAwesomeIcon>
        </div>
      </div>

      <div className="pb-[30px]">
        <a href="http://24.199.116.13:2000/">
          <button className="hover:underline">view live</button>
        </a>
      </div>

      <BackButton to="/#portfolio" />
    </div>
  );
};
