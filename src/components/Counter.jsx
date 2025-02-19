import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Button, Box, Typography } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Spring animation for background color transition
  const bgSpring = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${Math.min(count * 0.1, 1)})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={{ ...bgSpring, padding: "20px", borderRadius: "10px" }}
    >
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {count}
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
          <Button variant="contained" color="error" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Box>
      </Box>
    </animated.div>
  );
};

export default Counter;
