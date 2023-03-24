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
      tags: ["TypeScript", "Mar 22 2023"],
      title: "FoodStats.net",
      text: "Full stack ERN web app for retrieving and visualizing nutritional information.",
      link: "/portfolio/foodstats",
    },
    {
      tags: ["TypeScript", "Feb 28 2023"],
      title: "Blog Application",
      text: "Full stack MERN blog application. Tested with Jest/Supertest.",
      link: "/portfolio/blog-application",
    },
    {
      tags: ["JavaScript", "Jan 24 2023"],
      title: "Healthcare Site",
      text: "ERN application for a healthcare practice. Deployed with DigitalOcean IaaS.",
      link: "/portfolio/healthcare-site",
    },
    {
      tags: ["JavaScript", "Feb 5 2023"],
      title: "Message Board",
      text: "MERN chat message application with passportJS authentication.",
      link: "/portfolio/message-board",
    },
    {
      tags: ["JavaScript", "Jan 29 2023"],
      title: "Inventory Application",
      text: "MERN inventory application with CRUD operations.",
      link: "/portfolio/inventory-application",
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
          className="z-20 pl-[15px] text-gray-300 hover:text-gray-400
          sm:pl-[30px]"
        >
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            className="p-[5px] pl-0
            sm:p-[20px]"
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
                  // if not being shown, set opacity depending on cols
                  (getIndex(position + i) === 1
                    ? ""
                    : getIndex(position + i) === 2
                    ? " transition-opacity opacity-[30%] md:opacity-100"
                    : getIndex(position + i) === 3
                    ? " transition-opacity opacity-[30%] xl:opacity-100"
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
          className="z-20 pr-[15px] text-gray-300 hover:text-gray-400
          sm:pr-[30px]"
        >
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className=" p-[5px] pr-0
            sm:p-[20px]"
          />
        </button>
      </div>
      <div className="w-full flex justify-center space-x-[10px] mt-[10px]">
        {projects.map((_, i) => (
          <div
            key={`indicator_${i}`}
            className={
              projects.length - 1 - getIndex(position + 3) === i
                ? "w-[10px] h-[10px] bg-gray-400 rounded-sm"
                : "w-[10px] h-[10px] bg-gray-300 rounded-sm"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
