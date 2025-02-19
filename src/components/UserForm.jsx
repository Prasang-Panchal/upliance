import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [isChanged, setIsChanged] = useState(false);

  // Load saved user data from localStorage
  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setUserData(savedUserData);
    } else {
      setUserData((prev) => ({ ...prev, id: Date.now().toString() }));
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isChanged) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Do you really want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isChanged]);

  // Update user data on input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  // Save user data to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem(
      "richTextContent",
      JSON.stringify({
        blocks: [
          {
            text: `Name: ${userData.name}
                Email: ${userData.email}
                Address: ${userData.address}
                Phone: ${userData.phone}`,
          },
        ],
        entityMap: {},
      })
    );
    setIsChanged(false);
    alert("User data saved successfully!");
  };

  return (
    // User data form details
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        User Data Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="User ID"
          name="id"
          value={userData.id}
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Save User Data
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
