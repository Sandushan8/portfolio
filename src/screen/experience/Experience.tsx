import FullStackDev from "../../assets/icons/full-snack.jpeg";
export const Experience = () => {
  const experience = [
    {
      title: "Associate Software Engineer",
      company: "Well Tech Solutions",
      duration: "March 2023 – Present",
      content:
        "I am currently working as an Associate Software Engineer at Well Tech Solutions, where I develop and maintain web and mobile applications, along with their backend services. I am also learning new JavaScript frameworks like Next.js and NestJS, and working on mastering AWS technology.",
      skills: [
        "React",
        "React Native",
        "Typescript",
        // "AWS",
        // "S3",
        // "EC2",
        "Node.js",
        "Express.js",
        "Nest.js",
        "Next.js",
        "MongoDB",
        "SQL",
        "Socket.io",
        "Redux",
        "Redux Toolkit",
        "Material UI",
        "Tailwind CSS",
        "Git",
        "Jira",
      ],
    },
    {
      title: "Intern Software Engineer",
      company: "Well Tech Solutions",
      duration: "September 2022 – March 2023",
      content:
        "I worked as an Intern Software Engineer at Well Tech Solutions, where I was responsible for developing and maintaining web applications. Additionally, I gained experience with TypeScript and creating responsive web designs.",
      skills: [
        "React",
        "CSS",
        "Typescript",
        "Redux Toolkit",
        "Socket.io",
        "Git",
        "Jira",
        "Material UI",
      ],
    },
  ];

  return (
    <div className="text-white ml:2 lg:ml-16 mr-2 xl:mr-16 h-full pt-10 pb-10">
      <h1 className="text-5xl font-bold text-greetBlue text-center lg:text-left">
        Experience
      </h1>
      <div className="flex flex-row mt-20 h-100">
        <div className="flex flex-col gap-10 w-1/2 pl-8 lg:pl-0 pr-8 lg:pr-0">
          {experience.map((exp) => {
            return (
              <div className="rounded-md w-full h-60 bg-blue-500 p-2 xl:p-5 flex flex-col gap-3 lg:gap-10 shadow-md">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="text-xl xl:text-2xl font-bold">
                    {exp.title} - {exp.company}
                  </div>
                  <div className="text-sm xl-text-base italic">
                    {exp.duration}
                  </div>
                </div>
                <div className="text-sm lg:text-base">{exp.content}</div>
                {/* <div>
                  <div className="flex flex-row gap-1 text-base flex-wrap italic">
                    Skills:{" "}
                    {exp.skills.map((skill, index) => {
                      return (
                        <p className="text-base ">
                          {skill} {index !== exp.skills.length - 1 && ","}
                        </p>
                      );
                    })}
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col h-full xl:h-100 w-1/2 px-0 lg:px-10">
          <img src={FullStackDev} className="object-cover h-full  rounded-lg" />
        </div>
      </div>
    </div>
  );
};
