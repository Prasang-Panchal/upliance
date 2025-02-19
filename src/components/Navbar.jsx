import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/")}
        >
          My Dashboard
        </Typography>
        {user ? (
          <>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
