import Mockup from "./images/image-mockups.png";
import Background from "./images/bg-intro-desktop.svg";
import SmallBackground from "./images/bg-intro-mobile.svg";

import "./App.css";

function HeroSection() {
  return (
    <section
      className="whitewhite pl-32 flex h-screen relative overflow-x-clip max-sm:p-0 max-sm:text-center
    max-sm:flex-row-reverse"
    >
      <div
        className="w-2/5 flex flex-col justify-center pr-12 
      max-sm:w-full max-sm:items-center max-sm:px-8 max-sm:justify-end max-sm:pb-36"
      >
        <h1 className="text-5xl font-medium mb-5 leading-[52px] ">
          Next generation digital banking
        </h1>
        <p className="text-md mb-8 greyText">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <button
          className="grad text-white text-sm font-medium w-44 px-7 py-3 rounded-full
        hover:opacity-50"
        >
          Request Invite
        </button>
      </div>
      <div className="max-sm:hidden">
        <img
          src={Background}
          alt="background"
          className="absolute top-[-170px] right-[-200px] w-8/12 max-lg:w-9/12 max-lg:top-52"
        ></img>
        <img
          src={Mockup}
          alt="Mobile phones"
          className="absolute top-[-100px] right-[-100px] w-6/12 max-lg:w-6/12 max-lg:top-52"
        ></img>
      </div>
      <div className="">
        <img
          src={SmallBackground}
          alt="SmallBackground"
          className="sm:hidden absolute w-full top-[-100px]"
        ></img>
        <img
          src={Mockup}
          alt="Mobile phones"
          className="sm:hidden absolute top-[-150px] right-10 w-10/12"
        ></img>
      </div>
    </section>
  );
}

export default HeroSection;
