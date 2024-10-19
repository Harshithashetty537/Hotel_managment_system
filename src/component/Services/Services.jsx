import React from "react";

import "./style.scss";

import PlanService from "./PlanService/PlanService";
import HotelVideo from "./HotelVideo/HotelVideo";
// import PlanService from "./PlanService/PlanService";

const ServiceSection = () => {
  return (
    <div className="container">
      <div id="service_container">
        <div className="title-container">
          Getting Started with DoLocal Hotel is Easy
        </div>
        <div className="sub-title-container">
          Discover how simple it is to meet your needs with our <br />
          seamless process and dedicated support.
        </div>
        <PlanService />
        <HotelVideo />
      </div>
    </div>
  );
};

export default ServiceSection;
