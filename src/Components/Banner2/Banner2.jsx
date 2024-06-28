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
            <button>
              <img className="buttonImg" src={buttonImg} alt="buttonImg" />
            </button>
          </div>
        </div>
      </div>
      {/* <h1>Bridging digital worlds the power of connection</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        ipsam vel quidem eligendi excepturi vero voluptatum quis
      </p>
      <div class="container">
        <div class="circle circle-xlarge"></div>
        <div class="circle circle-large"></div>
        <div class="circle circle-medium"></div>
        <div class="circle"></div>
        <div class="content">
          <button>shayan</button>
        </div>
      </div> */}
    </>
  );
};

export default Banner2;
