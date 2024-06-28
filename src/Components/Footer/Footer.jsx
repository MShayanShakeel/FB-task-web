import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Footer.css";
import LogoImage from "../../images/Logoimage.png";
import { FaXTwitter, FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div className="Footer-Main">
        <div className="Banner1-button">
          <h2>ready when you are</h2>
          <h3>JOIN COMMUNITY</h3>
          <button>
            <MdOutlineArrowOutward />
          </button>
        </div>

        <div className="Footer-Second-Navbar">
          <div>
            <img src={LogoImage} alt="Logo" />
          </div>
          <div className="Navbar-List-Main">
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>FEATURES</li>
              <li>ROADMAP</li>
              <li>TOKENOMICS</li>
            </ul>
          </div>
          <div className="Footer-Icons">
            {" "}
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
