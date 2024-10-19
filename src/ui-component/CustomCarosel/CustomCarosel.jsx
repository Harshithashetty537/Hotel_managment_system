// src/components/CustomCarousel.js
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"; // Left arrow icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Right arrow icon

const images = [
  { id: 1, src: "./card1.jpg", alt: "Slide 1" },
  { id: 2, src: "./card2.jpg", alt: "Slide 2" },
  { id: 3, src: "./card3.jpg", alt: "Slide 3" },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="400px"
      p={4}
    >
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
      />
      <IconButton
        onClick={handlePrev}
        style={{ position: "absolute", top: "50%", left: "10px", zIndex: 1 }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={handleNext}
        style={{ position: "absolute", top: "50%", right: "10px", zIndex: 1 }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default CustomCarousel;
