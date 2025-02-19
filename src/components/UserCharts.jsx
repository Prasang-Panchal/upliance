import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserCharts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Example Static Data for the chart
    const data = [
      { name: "Users", count: 120 },
      { name: "Forms Submitted", count: 80 },
      { name: "Edits Made", count: 45 },
    ];
    setChartData(data);
  }, []);

  return (
    <Card sx={{ width: "100%", p: 2, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" textAlign="center" mb={2}>
          User Activity Overview
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} barSize={40}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4caf50" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UserCharts;
