import React from "react";

const OpenCloseMenu = () => {
  return (
    <div className="z-10 relative flex justify-center">
      <div className="absolute bg-white w-[90%] mt-5 rounded shadow-lg shadow-slate-500/50">
        <ul className="flex flex-col space-y-4 my-8 text-center">
          <a href="*" className="hover:text-green-500">
            <li>Home</li>
          </a>
          <a href="*" className="hover:text-green-500">
            <li>About</li>
          </a>
          <a href="*" className="hover:text-green-500">
            <li>Contact</li>
          </a>
          <a href="*" className="hover:text-green-500">
            <li>Blog</li>
          </a>
          <a href="*" className="hover:text-green-500">
            <li>Careers</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default OpenCloseMenu;
