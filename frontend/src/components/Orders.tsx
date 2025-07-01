import React, { useState } from "react";
import { Box, Typography, Button, Paper, Avatar, Stack } from "@mui/material";

const tabs = ["All", "In Progress", "Fulfilled"];

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const orders = [
  { id: "#ORD001", description: "2x Wireless Mouse, 1x HDMI Cable", status: "In Progress", customer: "Alex Morgan" },
  { id: "#ORD002", description: "3x USB-C Adapter", status: "Fulfilled", customer: "Jordan Lee" },
  { id: "#ORD003", description: "1x Mechanical Keyboard", status: "In Progress", customer: "Samantha Chan" },
  { id: "#ORD004", description: "2x Wireless Mouse", status: "Fulfilled", customer: "Mohit Jain" },
  { id: "#ORD005", description: "1x HDMI Cable, 2x USB-C Adapter", status: "In Progress", customer: "Emily Kim" },
  { id: "#ORD006", description: "4x Mechanical Keyboard", status: "Fulfilled", customer: "Brian Smith" },
  { id: "#ORD007", description: "1x Wireless Mouse", status: "In Progress", customer: "Priya Patel" },
  { id: "#ORD008", description: "1x USB-C Adapter, 1x HDMI Cable", status: "Fulfilled", customer: "Carlos Gomez" },
  { id: "#ORD009", description: "5x HDMI Cable", status: "In Progress", customer: "Linda Zhao" },
  { id: "#ORD010", description: "2x Mechanical Keyboard", status: "Fulfilled", customer: "Olivia Brown" },
  { id: "#ORD011", description: "3x USB-C Adapter", status: "In Progress", customer: "Ben White" },
  { id: "#ORD012", description: "1x Wireless Mouse", status: "Fulfilled", customer: "Emma Jones" },
  { id: "#ORD013", description: "2x HDMI Cable", status: "In Progress", customer: "Lucas Wang" },
  { id: "#ORD014", description: "1x USB-C Adapter", status: "Fulfilled", customer: "Sofia Martinez" },
  { id: "#ORD015", description: "2x Mechanical Keyboard", status: "In Progress", customer: "Ryan Evans" },
  { id: "#ORD016", description: "1x Wireless Mouse, 2x HDMI Cable", status: "Fulfilled", customer: "Isabella Garcia" },
  { id: "#ORD017", description: "1x USB-C Adapter, 1x Mechanical Keyboard", status: "In Progress", customer: "Ethan Clark" }
];


  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2} color="white">Orders</Typography>
      <Stack direction="row" spacing={2} mb={3}>
        {tabs.map((tab, i) => (
          <Button
            key={tab}
            variant="contained"
            onClick={() => setSelectedTab(i)}
            sx={{
              bgcolor: selectedTab === i ? "#222" : "#232323",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              boxShadow: "none",
              "&:hover": { bgcolor: "#111" }
            }}
          >
            {tab}
          </Button>
        ))}
      </Stack>
      <Stack spacing={2}>
        {orders
          .filter(o =>
            selectedTab === 0
              ? true
              : selectedTab === 1
                ? o.status === "In Progress"
                : o.status === "Fulfilled"
          )
          .map((order, i) => (
            <Paper key={i} sx={{ display: "flex", alignItems: "center", bgcolor: "#232323", p: 2, borderRadius: 3 }}>
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#2b2b2b", mr: 2 }} />
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={700} color="#bbb">{order.id}</Typography>
                <Typography color="#bbb">{order.description}</Typography>
                <Typography color={order.status=='Fulfilled' ? 'yellow' : 'red'} fontSize={14}>{order.status}</Typography>
              </Box>
              <Box sx={{ color: "#bbb", fontSize: 32, ml: 2 }}>{'>'}</Box>
            </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Orders;
