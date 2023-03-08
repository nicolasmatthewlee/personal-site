import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { Tag } from "./tag";

interface Props {
  data: { tags: string[]; title: string; text: string; link: string };
}

export const Project = ({ data: { tags, title, text, link } }: Props) => {
  return (
    <div className="bg-white w-full h-[300px] min-w-0 shadow p-[30px] pb-[45px] rounded-[10px] border-[2px] flex flex-col">
      <div className="flex-1 flex flex-col space-y-[20px]">
        <div className="flex space-x-[10px]">
          {tags.map((t) => (
            <Tag text={t} key={t} />
          ))}
        </div>
        <h1 className="text-lg font-bold line-clamp-2">{title}</h1>
        <h2 className="line-clamp-3">{text}</h2>
      </div>
      <HashLink smooth={false} to={link + "/#"}>
        <button className="hover:underline text-gray-500">
          Read more
          <FontAwesomeIcon className="ml-[10px]" icon={faLongArrowAltRight} />
        </button>
      </HashLink>
    </div>
  );
};
