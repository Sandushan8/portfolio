import CSS from "../../assets/icons/skills/CSS.png";
import GIT from "../../assets/icons/skills/git.png";
import HTML from "../../assets/icons/skills/html.png";
import JS from "../../assets/icons/skills/JS.png";
import MaterialUI from "../../assets/icons/skills/MaterialUI.png";
import NEST from "../../assets/icons/skills/nestjs.svg";
import NEXT from "../../assets/icons/skills/nextjs.svg";
import Node from "../../assets/icons/skills/nodejs.png";
import React from "../../assets/icons/skills/React.png";
import REDUX from "../../assets/icons/skills/Redux.png";
import Socket from "../../assets/icons/skills/SocketIo.png";
import TS from "../../assets/icons/skills/TS.png";
import Tailwind from "../../assets/icons/skills/TailwindCSS.png";
import clsx from "clsx";

export const Skills = () => {
  const skills = [
    {
      title: "HTML",
      icon: HTML,
    },
    {
      title: "CSS",
      icon: CSS,
    },

    {
      title: "JS",
      icon: JS,
    },
    {
      title: "Material UI",
      icon: MaterialUI,
    },
    {
      title: "NEST JS",
      icon: NEST,
    },
    {
      title: "NEXT JS",
      icon: NEXT,
    },
    {
      title: "Node JS",
      icon: Node,
    },
    {
      title: "React JS",
      icon: React,
    },
    {
      title: "React Native",
      icon: React,
    },
    {
      title: "REDUX",
      icon: REDUX,
    },
    {
      title: "Socket IO",
      icon: Socket,
    },
    {
      title: "GIT",
      icon: GIT,
    },
    {
      title: "TS",
      icon: TS,
    },
    {
      title: "Tailwind CSS",
      icon: Tailwind,
    },
  ];
  return (
    <div className="text-white ml:2 lg:ml-16 mr-16 h-full xl:h-screen pt-10 xl:pt-0 pb-10 xl:pb-0">
      <h1 className="text-3xl sm:text-5xl pl-8 lg:pl-0 font-bold text-greetBlue text-center lg:text-left">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap gap-20 mt-16 pl-8 lg:pl-0 pr-8 lg:pr-0 w-screen lg:w-full justify-center lg:justify-normal">
        {skills.map((skill) => {
          return (
            <div className="flex flex-col gap-2 mt-4 relative">
              <img
                src={skill.icon}
                alt={skill.title}
                className={clsx(
                  "w-20 h-20 bg-layoutBlue hover:cursor-pointer z-1",
                  skill.title === "NEXT JS" && "bg-white rounded-full"
                )}
              />
              {skill.title === "React Native" ? (
                <div className="absolute -bottom-4 w-40 text-1xl text-reactBlue -ml-1 -mt-3">
                  {skill.title}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
