import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <div className="shadow w-full flex">
      <h1 className="flex-1">Nicolas Lee</h1>
      <div className="flex">Portfolio</div>
      <div>Contact</div>
      <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
    </div>
  );
};
