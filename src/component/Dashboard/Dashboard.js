// src/pages/Dashboard.js
import React from "react";
import Navbar from "../Navbar";
import { Box, Typography } from "@mui/material";
import CustomCarousel from "../../ui-component/CustomCarosel/CustomCarosel";
import ServiceList from "../Services/Services";
import Rent from "../RentSection/Rent";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box p={5}>
        <Box textAlign="center">
          {" "}
          {/* Centering using Box */}
          <Typography variant="h4" gutterBottom>
            Welcome to the Hotel Management Dashboard
          </Typography>
        </Box>
        <CustomCarousel />
        <ServiceList />
        <Rent />
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;
