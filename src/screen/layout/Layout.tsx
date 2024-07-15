import { LayoutProps } from "./Layout.types";
import Logo from "../../assets/icons/logo.png";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-layoutBlue h-full w-full">
      <div className="bg-layoutBlue h-20 w-full pl-16 flex flex-row gap-5 shadow-md sticky top-0 z-10">
        <img src={Logo} className="h-18 w-18" alt="logo" />
        <h1 className="text-2xl md:text-4xl text-white pt-5">Ihill Dewpura</h1>
      </div>
      {children.map((child) => {
        return (
          <div className="bg-layoutBlue flex flex-col flex-16 h-full gap-10">
            {child}
          </div>
        );
      })}
    </div>
  );
};
