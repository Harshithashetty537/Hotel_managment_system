import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DoLocal Hotel Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
