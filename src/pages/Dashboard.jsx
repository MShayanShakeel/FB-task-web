import React from "react";
import "./Dashboard.css";
import Navbar from "../Components/Navbar/Navbar";
import Banner1 from "../Components/Banner1/Banner1";
import Banner2 from "../Components/Banner2/Banner2";
import Banner3 from "../Components/Banner3/Banner3";
import Banner4 from "../Components/Banner4/Banner4";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="Dashboard-Main">
        <div className="row">
          <div className="col-12">
            <Banner1 />
            <Banner2 />
            <Banner3 />
            <Banner4 />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
