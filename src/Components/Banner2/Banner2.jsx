import React from "react";
import "./Banner2.css";
import buttonImg from "../../images/butonpic.png";

const Banner2 = () => {
  return (
    <>
      <div className="Banner2-Main">
        <div>
          <div className="content">
            <h1>Bridging digital worlds the power of connection</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam vel quidem eligendi excepturi vero voluptatum
              quis Praesentium ipsam vel quidem eligendi excepturi vero
              voluptatum quis
            </p>
            <div className="solar-system">
              <button className="sun">
                <img className="buttonImg" src={buttonImg} alt="buttonImg" />
              </button>
              <div className="orbit orbit00"></div>
              <div className="orbit orbit0"></div>
              <div className="orbit orbit1"></div>
              <div className="orbit orbit2"></div>
              <div className="orbit orbit3"></div>
              <div className="orbit orbit4"></div>
              <div className="orbit orbit5"></div>
              <div className="orbit orbit6"></div>
              <div className="orbit orbit7"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
