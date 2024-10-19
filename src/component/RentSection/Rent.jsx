"use client";

import CarouselRentSection from "./CarouselRentSection";
import "./style.scss";

const Rent = () => {
  return (
    <div className="container">
      <div style={{ textAlign: "center", paddingBottom: "100px" }}>
        <h1 style={{ paddingTop: "100px" }}>Why Choose your DoLocal Hotel?</h1>
      </div>
      <div id="rent_container">
        <CarouselRentSection />
      </div>
    </div>
  );
};

export default Rent;
