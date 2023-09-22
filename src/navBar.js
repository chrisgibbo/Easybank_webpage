import { ReactComponent as Logo } from "./images/logo.svg";
// could import React Router, but decided this is more effient as the pages do not go anywhere
import "./App.css";

function Nav() {
  return (
    <nav className="flex items-center justify-around p-4 top-0 bg-white max-lg:hidden relative z-10">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex space-x-6 greyText text-sm">
          <li>
            <a
              href="*"
              className="py-6 hover:text-black hover:border-b-4 hover:border-green-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="*"
              className="py-6 hover:text-black hover:border-b-4 hover:border-green-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="*"
              className="py-6 hover:text-black hover:border-b-4 hover:border-green-500"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="*"
              className="py-6 hover:text-black hover:border-b-4 hover:border-green-500"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="*"
              className="py-6 hover:text-black hover:border-b-4 hover:border-green-500"
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="grad text-white text-sm font-medium px-7 py-3 rounded-full 
        hover:opacity-50"
        >
          Request Invite
        </button>
      </div>
    </nav>
  );
}

export default Nav;
