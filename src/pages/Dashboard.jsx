import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import UserCharts from "../components/UserCharts";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Box p={3} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.displayName || "User"}
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: "1200px", width: "100%" }}>
        {/* Counter Section */}
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Counter />
          </Paper>
        </Grid>

        {/* Rich Text Editor */}
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <RichTextEditor />
          </Paper>
        </Grid>

        {/* User Form */}
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <UserForm />
          </Paper>
        </Grid>

        {/* User Charts */}
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <UserCharts />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
