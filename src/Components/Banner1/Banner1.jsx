import React from "react";
import "./Banner1.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner1 = () => {
  return (
    <>
      <div className="Banner1-Main row">
        <div className="Gradiant-color"></div>
        <div className="Banner1-button col-12">
          <button>GAME</button>
          <h1>THE ONCHAIN</h1>
          <h2>SOLANA PREDICTING</h2>
        </div>
        <div className="Banner1-contant Banner1-button">
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="banner1-bottom-content">
            <h3>DEX tools</h3>{" "}
            <button>
              <MdOutlineArrowOutward />
            </button>
            <h3>RAYDIUM</h3>
            <button>
              <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
