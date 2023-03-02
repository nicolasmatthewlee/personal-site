import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "./tag";

interface Props {
  data: { tags: string[]; title: string; text: string };
}

export const Project = ({ data: { tags, title, text } }: Props) => {
  return (
    <div className="w-full h-[300px] min-w-0 shadow p-[30px] rounded-[10px] border-[2px] space-y-[20px]">
      <div className="flex space-x-[10px]">
        {tags.map((t) => (
          <Tag text={t} key={t} />
        ))}
      </div>
      <h1 className="text-lg font-bold line-clamp-2">{title}</h1>
      <h2 className="line-clamp-3">{text}</h2>
      <button className="hover:underline font-bold">
        Read more
        <FontAwesomeIcon className="ml-[10px]" icon={faLongArrowAltRight} />
      </button>
    </div>
  );
};
