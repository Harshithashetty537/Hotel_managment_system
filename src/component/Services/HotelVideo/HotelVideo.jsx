import React from "react";
import "./hotelVideo.scss";

const HotelVideo = () => {
  return (
    <div className="hotel-video-container">
      <div className="hotel-video-content">
        <h2 className="hotel-video-title">Explore Our Luxurious Hotel</h2>
        <p className="hotel-video-description">
          Take a virtual tour of our world-class hotel, where elegance meets
          comfort. Enjoy a visual experience of our premium rooms, gourmet
          restaurants, and breathtaking views.
        </p>
        <div className="hotel-video">
          <video src="/video.mp4" controls width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HotelVideo;
