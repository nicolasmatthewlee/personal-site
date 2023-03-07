import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

interface Props {
  to: string;
}

export const BackButton = ({ to }: Props) => {
  return (
    <HashLink to={to}>
      <button className="px-[10px] py-[2px]">
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="mr-[5px]"
        ></FontAwesomeIcon>
        back
      </button>
    </HashLink>
  );
};
