import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="px-[30px]" id="contact">
      <h2 className="text-[24px] font-bold">Want to get in touch?</h2>
      <div className="flex">
        <div className="text-[18px] flex flex-1 items-center text-gray-600">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mr-[10px] text-[15px] text-gray-800 pt-[2px]"
          />
          <a href="mailto:nicolasmatthewlee@gmail.com">
            nicolasmatthewlee@gmail.com
          </a>
        </div>
        <div className="space-x-[10px]">
          <a href="https://github.com/nicolasmatthewlee">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-matthew-lee">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
