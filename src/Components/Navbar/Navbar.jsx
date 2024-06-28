import React from "react";
import "./Navbara.css";
import Logo from "../../images/Logoimage.png";

const Navbar = () => {
  return (
    <>
      <div className="Navbar-Main">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Navbar-List-Main">
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
