import React from "react";
import "./Banner2.css";

const Banner4 = () => {
  return (
    <>
      <div className="Banner2-Main">
        <div>
          <div className="content">
            <h1>solpump’ Path to Success</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam vel quidem eligendi excepturi vero voluptatum
              quis Praesentium ipsam vel quidem eligendi excepturi vero
              voluptatum quis
            </p>
            <div className="container mt-4 mb-2">
              <div className="Cards-Main row d-flex align-items-stretch">
                <div className="col-md-3 mb-2 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body cards-buttons-4">
                      <button>Inception</button>
                      <button>Establishment</button>
                      <button>Expansion</button>
                      <button>Evolution</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-9 mb-2 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body d-flex flex-column justify-content-center">
                      <ul>
                        <li>
                          <input type="radio" id="item1" name="radioGroup" />
                          <label htmlFor="item1">
                            Lorem Ipsum is simply dummy text of the
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="item2" name="radioGroup" />
                          <label htmlFor="item2">
                            Lorem Ipsum is simply dummy text
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="item3" name="radioGroup" />
                          <label htmlFor="item3">
                            Lorem Ipsum is simply dummy text of the
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="item4" name="radioGroup" />
                          <label htmlFor="item4">
                            Lorem Ipsum is simply dummy text
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="item5" name="radioGroup" />
                          <label htmlFor="item5">
                            Lorem Ipsum is simply dummy text of the
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="margin-6rem-h1">UNDERSTANDING THE solpumpSECONOMY</h1>
            <div className="Banner-4_bottom-content">
              <div className="Banner-4_bottom-content-Second">
                <span>
                  <h3>200</h3>
                  <h5>SOL</h5>
                </span>

                <p>Presale Amount</p>
              </div>

              <div className="Banner-4_bottom-content-Second">
                <span>
                  <h3>500</h3>
                  <h5>SOL</h5>
                </span>
                <p>Ryadium LP + 15% Token</p>
              </div>

              <div className="Banner-4_bottom-content-Second">
                <span>
                  <h3>75</h3>
                  <h5>SOL</h5>
                </span>
                <p>Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner4;
