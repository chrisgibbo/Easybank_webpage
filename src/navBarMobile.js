import Logo from "./images/logo.svg";
import ClosedMenu from "./images/icon-hamburger.svg";
import OpenCloseMenu from "./components/OpenCloseMenu";
import React, { useState } from "react";

function NavMobile() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="px-7 py-6 bg-white relative z-10 lg:hidden">
        <div>
          <div className="flex justify-between items-center">
            <img src={Logo} alt="company logo"></img>
            <button onClick={() => setOpenMenu((prev) => !prev)}>
              <img src={ClosedMenu} alt="hamburger menu"></img>
            </button>
          </div>
        </div>
      </nav>
      {openMenu && <OpenCloseMenu />}
    </>
  );
}

export default NavMobile;
