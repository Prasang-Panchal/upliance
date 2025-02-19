import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { signInWithGoogle, signUpWithEmail, loginWithEmail } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate Input Fields
  const validate = () => {
    let tempErrors = {};
    if (isSignUp && !name.trim()) tempErrors.name = "Full Name is required";
    if (!email.trim()) tempErrors.email = "Email is required";
    if (!password.trim()) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle Authentication
  const handleAuth = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isSignUp) {
      await signUpWithEmail(name, email, password);
    } else {
      await loginWithEmail(email, password);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f4f4"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 350, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          {isSignUp ? "Create an Account" : "Sign In"}
        </Typography>

        <form onSubmit={handleAuth}>
          {isSignUp && (
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
          )}
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{ mt: 2, cursor: "pointer", color: "blue" }}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={signInWithGoogle}
          sx={{ mt: 2 }}
        >
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
