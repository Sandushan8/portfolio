import Logo from "../../assets/icons/logo.png";
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
    <div className="flex flex-row mt-5 ml-16 mr-16 mt-16 h-full pt-40 gap-40 h-screen">
      <div className="flex flex-col gap-1 pl-2 pt-16">
        <h1 className="text-6xl font-bold text-greetBlue">Hi</h1>
        <h1 className="text-6xl font-bold text-greetBlue">
          I am Ihill Dewpura
        </h1>
        <p className="text-2xl text-white">
          With two years of experience, I specialize in frontend, backend, and
          mobile app development.
        </p>
        <p className="text-2xl text-white">
          I excel in crafting strategic solutions, leveraging strong teamwork,
          and analytical skills <br /> to deliver exceptional results
        </p>
        <p className="text-2xl text-white">
          Let's collaborate on turning ideas into innovative realities.
        </p>
      </div>
      <div className="flex justify-center -mt-20">
        <Lottie options={defaultOptions} width={500} height={500} />
      </div>
    </div>
  );
};
