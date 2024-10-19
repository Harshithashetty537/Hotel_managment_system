import React from "react";
import "./style.scss";
const PlanService = () => {
  const serviceDetails = [
    {
      title: "Choose Your Plan",
      subTitle:
        "Buy, rent, or service - select the option that  suits you best.",
      image: "serviceImg/serviceIcon1.svg",
    },
    {
      title: "Browse Our Collection",
      subTitle: "Explore our extensive range of laptops.",
      image: "/serviceImg/serviceIcon2.svg",
    },
    {
      title: "Fast Delivery & Service",
      subTitle: "Receive your laptop or get it serviced with minimal downtime.",
      image: "/serviceImg/serviceIcon3.svg",
    },
    {
      title: "Quick Checkout ",
      subTitle: "Enjoy a seamless and secure checkout process.",
      image: "/serviceImg/serviceIcon4.svg",
    },
  ];
  return (
    <div id="main_container">
      <div className="image-container">
        <img
          className="service-page-image"
          src="./hotel4.jpg"
          alt="service"
          layout="responsive"
          width={100}
          height={50}
          style={{ width: "100%" }}
        />
      </div>
      <div className="service-detail-container">
        {serviceDetails.map((item, index) => {
          return (
            <div className="serviceSection" key={index}>
              <div className="serviceIcon">
                <img src={item.image} alt="icon1" width={100} height={100} />
              </div>
              <div className="serviceIcons">
                <div className="serviceIcon-title">{item.title}</div>
                <div className="serviceIcon-subTitle">{item.subTitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanService;
