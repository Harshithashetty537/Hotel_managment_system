import React, { useState } from "react";

import "./style.scss";

const images = [
  "./Card7.jpg",
  "./Card8.jpg",
  "./Card9.jpg",
  "./Card10.jpg",
  "./Card11.jpg",
];

function CarouselRentSection() {
  const [imageIndex, setImageIndex] = useState(1);

  const handleImageClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const arr = [
    {
      title: "Wide Selection",
      desc: "Choose from the latest models and top brands.",
      id: 1,
      img: "./Card5.jpg",
    },
    {
      title: "Flexible Plans",
      desc: "Rent short-term or long-term with affordable pricing.",
      id: 2,
      img: "./Card6.jpg",
    },
    {
      title: "Expert Service",
      desc: "Professional maintenance and cleaning services.",
      id: 3,
      img: "./Card11.jpg",
    },
    {
      title: "Customer Support",
      desc: "24/7 assistance to address all your needs.",
      id: 4,
      img: "./Card9.jpg",
    },
    {
      title: "Quality Assurance",
      desc: "quality food and maintainng the room cleanly",
      id: 5,
      img: "./Card10.jpg",
    },
  ];

  return (
    <div>
      <div id="selection-box-container">
        <div className="content">
          {arr?.map((item) => {
            return (
              <div
                key={item.id}
                className="selected-item-wrapper"
                onClick={() => {
                  setImageIndex(item?.id);
                }}
                style={item?.id === imageIndex ? { borderColor: "black" } : {}}
              >
                <h2 style={item?.id === imageIndex ? { color: "#000000" } : {}}>
                  {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="image-container">
          <img
            className="laptopImage"
            src={arr.find((item) => item?.id === imageIndex)?.img ?? ""}
            alt="Laptop image"
            width={619}
            height={559}
            onClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselRentSection;
