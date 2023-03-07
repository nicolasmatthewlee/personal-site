import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { Project } from "./project";
import { useState } from "react";

export const Portfolio = () => {
  // NOTE: IF UPDATING PROJECTS, MUST ADD ADDITIONAL TAILWIND CLASSES BELOW
  // translate-x-[100%] translate-x-[-100%] translate-x-[-200%] translate-x-[200%]
  const projects: {
    tags: string[];
    title: string;
    text: string;
    link: string;
  }[] = [
    {
      tags: ["JavaScript", "Jan 24 2023"],
      title: "Healthcare Site",
      text: "ERN application for a healthcare practice. Deployed with DigitalOcean IaaS.",
      link: "/portfolio/healthcare-site",
    },
    {
      tags: ["JavaScript", "Jan 29 2023"],
      title: "Inventory Application",
      text: "MERN inventory application with CRUD operations.",
      link: "/portfolio/inventory-application",
    },
    {
      tags: ["JavaScript", "Feb 28 2023"],
      title: "Item 3",
      text: "How to develop an application with MongoDB, express, react, and node.js.",
      link: "",
    },
    {
      tags: ["JavaScript", "Feb 28 2023"],
      title: "Item 4",
      text: "How to develop an application with MongoDB, express, react, and node.js.",
      link: "",
    },
  ];

  const [position, setPosition] = useState<number>(1);
  const [moveDirection, setMoveDirection] = useState<"right" | "left">();

  const getIndex = (n: number) => {
    return (n + projects.length) % projects.length;
  };

  return (
    <div id="portfolio">
      <div className="flex w-full h-[300px] relative">
        <button
          onClick={() => {
            setPosition(position + 1);
            setMoveDirection("right");
          }}
          className="z-20 pl-[30px] text-gray-300 hover:text-gray-400"
        >
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            className="p-[20px] pl-0"
          />
        </button>

        {/* Projects */}
        <div className="flex relative flex-1 overflow-visible">
          {projects.map((p, i) => (
            <div
              key={`project${i}`}
              className={
                `w-full md:w-1/2 xl:w-1/3 px-[10px] bg-white absolute translate-x-[${
                  getIndex(position + i) * 100 - 100
                }%] transition-all duration-[500ms]` +
                // if looping around, go behind other elements
                (getIndex(position + i) === 1
                  ? " z-20"
                  : (moveDirection === "right" &&
                      getIndex(position + i) === 0) ||
                    (moveDirection === "left" &&
                      getIndex(position + i) === projects.length - 1)
                  ? " z-0"
                  : " z-10")
              }
            >
              {/* Separate div to hold projects so project content can be lightened without making
              the background transparent */}
              <div
                className={
                  "duration-[500ms]" +
                  // if not being shown, set opacity
                  (getIndex(position + i) === 1
                    ? ""
                    : " transition-opacity opacity-[30%]")
                }
              >
                <Project data={p} />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setPosition(position + projects.length - 1);
            setMoveDirection("left");
          }}
          className="z-20 pr-[30px] text-gray-300 hover:text-gray-400"
        >
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className=" p-[20px] pr-0"
          />
        </button>
      </div>
      <div className="w-full flex justify-center space-x-[10px] mt-[10px]">
        {projects.map((_, i) => (
          <div
            key={`indicator_${i}`}
            className={
              projects.length - 1 - getIndex(position + 1) === i
                ? "w-[10px] h-[10px] bg-gray-400 rounded-sm"
                : "w-[10px] h-[10px] bg-gray-300 rounded-sm"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
