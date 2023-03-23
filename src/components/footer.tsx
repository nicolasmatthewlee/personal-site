import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="px-[30px] sm:px-[75px]" id="contact">
      <h2
        className="text-[20px] font-bold text-gray-800
      sm:text-[24px]"
      >
        Want to get in touch?
      </h2>
      <div className="flex">
        <div
          className="text-[14px] sm:text-[18px] flex flex-1 items-center text-gray-600
        sm:text-[16px]"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mr-[10px] text-[15px] text-gray-800 pt-[2px]"
          />
          <a href="mailto:nicolasmatthewlee@gmail.com">
            nicolasmatthewlee@gmail.com
          </a>
        </div>
        <div className="space-x-[10px] hidden sm:inline text-gray-800">
          <a href="https://github.com/nicolasmatthewlee">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-matthew-lee">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="space-x-[10px] sm:hidden pt-[30px] flex justify-center text-gray-800">
        <a href="https://github.com/nicolasmatthewlee">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-matthew-lee">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};
