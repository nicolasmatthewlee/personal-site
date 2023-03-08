import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  return (
    <div className="bg-white h-[60px] fixed shadow w-full flex items-center space-x-[30px] px-[30px] py-[10px] text-sm tracking-wide z-50 text-gray-800 font-medium">
      <div className="flex-1">
        <HashLink smooth={true} to="/#top">
          <button>NICOLAS LEE</button>
        </HashLink>
      </div>
      <HashLink smooth={true} to="/#portfolio">
        <button className="flex items-center space-x-[5px]">
          <FontAwesomeIcon icon={faFolderOpen} />
          <h1 className="hidden sm:inline">PORTFOLIO</h1>
        </button>
      </HashLink>
      <HashLink smooth={true} to="/#contact">
        <button className="flex items-center space-x-[5px]">
          <FontAwesomeIcon icon={faEnvelope} />
          <h1 className="hidden sm:inline">CONTACT</h1>
        </button>
      </HashLink>
    </div>
  );
};
