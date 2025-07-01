import React from "react";
import { Box, Card, Typography, Paper, Grid } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area
} from "recharts";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";

const statCards = [
  {
    label: "Pending Orders",
    value: 17,
    icon: <ShoppingBagIcon fontSize="large" />,
    bgcolor: "#222",
    color: "#ffe600"
  },
  {
    label: "Products",
    value: 28,
    icon: <StorefrontIcon fontSize="large" />,
    bgcolor: "#222",
    color: "#fff"
  },
  {
    label: "Low stock",
    value: 9,
    icon: <ErrorOutlineIcon fontSize="large" />,
    bgcolor: "#222",
    color: "#ff3b3b"
  },
  {
    label: "Completed Orders",
    value: 109,
    icon: <DoneAllIcon fontSize="large" />,
    bgcolor: "#222",
    color: "#1ec866"
  }
];

const lowStockProducts = [
  { id: "P001", name: "Wireless Mouse", description: "Ergonomic, battery-powered", qty: 2 },
  { id: "P009", name: "Mechanical Keyboard", description: "RGB, Blue Switches", qty: 1 },
  { id: "P023", name: "HDMI Cable", description: "2 meters, gold-plated", qty: 4 },
  { id: "P035", name: "USB-C Adapter", description: "Multiport, fast charge", qty: 3 },
];



const chartStyle = {
  minHeight: 240,
  background: "#232323",
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#888",
  flex: 1
};

const orderTrendsData = [
  { name: "Jan", orders: 20 },
  { name: "Feb", orders: 30 },
  { name: "Mar", orders: 18 },
  { name: "Apr", orders: 24 },
  { name: "May", orders: 35 },
  { name: "Jun", orders: 40 },
  { name: "Jul", orders: 30 }
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 5200 },
  { name: "Mar", revenue: 3300 },
  { name: "Apr", revenue: 4400 },
  { name: "May", revenue: 5900 },
  { name: "Jun", revenue: 6500 },
  { name: "Jul", revenue: 4900 }
];

const Dashboard = () => (
  <Box sx={{ color: "#fff", background: "#171717", minHeight: "100vh", padding: 0 }}>
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mt: 2, mb: 4 }}>
        Dashboard
      </Typography>
     <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    width: "100%",
    justifyContent: "space-between"
  }}
>
  {statCards.map((stat, i) => (
    <div
      key={i}
      style={{
        flex: "1 1 200px", // grow, shrink, min-width
        minWidth: "220px",
        maxWidth: "300px",
        background: stat.bgcolor,
        color: stat.color,
        display: "flex",
        alignItems: "center",
        padding: 16,
        borderRadius: 12,
        marginBottom: 8
      }}
    >
      <div style={{ marginRight: 16 }}>{stat.icon}</div>
      <div>
        <div style={{ fontWeight: 700 }}>{stat.label}</div>
        <div style={{ fontWeight: 700, fontSize: 22 }}>{stat.value}</div>
      </div>
    </div>
  ))}
</div>

    </Box>
    {/* Charts */}
        <div style={{
  display: "flex",
  gap: "24px",       // space between charts
  alignItems: "stretch", // makes both the same height
  marginTop: "16px"
}}>
  <div style={{ flex: 1 }}>
    <Paper sx={chartStyle}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center">
        <Typography fontWeight={700} mb={2} >Order Trends Chart</Typography>
        <ResponsiveContainer width="90%" height={180}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1ec866" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ffe600" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#1ec866"
              fill="url(#colorRev)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  </div>
  <div style={{ flex: 1 }}>
    <Paper sx={chartStyle}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center">
        <Typography fontWeight={700} mb={2}>Revenue Chart</Typography>
        <ResponsiveContainer width="90%" height={180}>
          <LineChart data={orderTrendsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#ffe600"
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  </div>
</div>

    {/* Low stock table */}
     <Paper sx={{ background: "#232323", borderRadius: 4, p: 2, mt: 3 }}>
  <Typography fontWeight={700} mb={2} color="white">
    Low stock products
  </Typography>
  <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="low stock table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: "#fff", borderColor: "#333", fontWeight: 700 }}>Product ID</TableCell>
          <TableCell sx={{ color: "#fff", borderColor: "#333", fontWeight: 700 }}>Product Name</TableCell>
          <TableCell sx={{ color: "#fff", borderColor: "#333", fontWeight: 700 }}>Description</TableCell>
          <TableCell sx={{ color: "#fff", borderColor: "#333", fontWeight: 700 }}>Qty</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lowStockProducts.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell sx={{ color: "#eee", borderColor: "#333" }}>{row.id}</TableCell>
            <TableCell sx={{ color: "#eee", borderColor: "#333" }}>{row.name}</TableCell>
            <TableCell sx={{ color: "#eee", borderColor: "#333" }}>{row.description}</TableCell>
            <TableCell sx={{ color: "#eee", borderColor: "#333" }}>{row.qty}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Paper>
  </Box>
);

export default Dashboard;
