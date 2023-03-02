import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { Project } from "./project";
import { useState } from "react";

export const Portfolio = () => {
  const projects: { tags: string[]; title: string; text: string }[] = [
    {
      tags: ["TypeScript", "Feb 28 2023"],
      title: "Developing a MERN blog application.",
      text: "How to develop an application with MongoDB, express, react, and node.js.",
    },
    {
      tags: ["JavaScript", "Feb 28 2023"],
      title: "Item 2",
      text: "How to develop an application with MongoDB, express, react, and node.js.",
    },
    {
      tags: ["JavaScript", "Feb 28 2023"],
      title: "Item 3",
      text: "How to develop an application with MongoDB, express, react, and node.js.",
    },
  ];

  const [position, setPosition] = useState<number>(0);

  const getIndex = (n: number) => {
    return (n + projects.length) % projects.length;
  };

  return (
    <div className="flex items-center w-full">
      <button onClick={() => setPosition(position + projects.length - 1)}>
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="text-gray-300 hover:text-gray-400 p-[20px] pl-0"
        />
      </button>

      <div className="flex space-x-[30px]">
        <div>
          <Project data={projects[getIndex(position)]} />
        </div>
        <div className="hidden md:inline">
          <Project data={projects[getIndex(position + 1)]} />
        </div>
        <div className="hidden xl:inline">
          <Project data={projects[getIndex(position + 2)]} />
        </div>
      </div>

      <button onClick={() => setPosition(position + 1)}>
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          className="text-gray-300 hover:text-gray-400 p-[20px] pr-0"
        />
      </button>
    </div>
  );
};
