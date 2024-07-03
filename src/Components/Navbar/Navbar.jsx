import React, { useState } from "react";
import "./Navbara.css";
import Logo from "../../images/Logoimage.png";

const Navbar = () => {
  const [toggle, setToggle] = useState();

  const handleToogle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  console.log(toggle, "toggle");
  return (
    <>
      <div className="Navbar-Main">
        <div>
          <img
            style={{ cursor: "pointer" }}
            src={Logo}
            alt="Logo"
            onClick={handleToogle}
          />
        </div>
        <div
          className={` ${
            toggle ? "Navbar-List-Main" : "Navbar-List-Main nabvar-List-hide"
          }`}
        >
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>FEATURES</li>
            <li>ROADMAP</li>
            <li>TOKENOMICS</li>
          </ul>
          <button>JOIN COMMUNITY</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
