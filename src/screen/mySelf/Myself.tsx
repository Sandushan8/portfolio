import Lottie from "react-lottie";
import animation from "../../assets/lottie/dev.json";

export const Myself = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:mt-5 lg:ml-16 lg:mr-16 lg:mt-16 h-full xl:pt-40 xl:gap-40 h-full xl:h-screen ">
      <div className="flex flex-col gap-1 px-2 pt-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-greetBlue pl-8 lg:pl-0">
          Hi
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-greetBlue pl-8 lg:pl-0">
          I am Ihill Dewpura
        </h1>
        <p className="text-xl md:text-2xl text-white pb-2 mt-2 pl-8 lg:pl-0 pr-8 lg:pr-0">
          With two years of experience, I specialize in frontend, backend, and
          mobile app development.
        </p>
        <p className="text-xl md:text-2xl text-white pb-2 pl-8 lg:pl-0 pr-8 lg:pr-0">
          I excel in crafting strategic solutions, leveraging strong teamwork,
          and analytical skills to deliver exceptional results
        </p>
        <p className="text-xl md:text-2xl text-white pb-2 pl-8 lg:pl-0 pr-8 lg:pr-0">
          Let's collaborate on turning ideas into innovative realities.
        </p>
      </div>
      <div className="flex justify-center xl:-mt-20">
        <Lottie options={defaultOptions} width={500} height={500} />
      </div>
    </div>
  );
};
