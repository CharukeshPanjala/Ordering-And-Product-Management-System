import React, { useState } from "react";
import { Box, Typography, Button, Paper, Avatar, Stack } from "@mui/material";

const filterTabs = ["All", "Low stock"];

const allProducts = [
  { id: "#PRD001", name: "Wireless Mouse", description: "Ergonomic, battery-powered", qty: 2 },
  { id: "#PRD002", name: "Mechanical Keyboard", description: "RGB, Blue Switches", qty: 15 },
  { id: "#PRD003", name: "HDMI Cable", description: "2 meters, gold-plated", qty: 9 },
  { id: "#PRD004", name: "USB-C Adapter", description: "Multiport, fast charge", qty: 3 },
  { id: "#PRD005", name: "Monitor Stand", description: "Adjustable height", qty: 22 },
  { id: "#PRD006", name: "Laptop Sleeve", description: "13-inch, waterproof", qty: 18 },
  { id: "#PRD007", name: "Webcam", description: "1080p, built-in mic", qty: 5 },
  { id: "#PRD008", name: "Bluetooth Speaker", description: "Portable, 8 hours battery", qty: 12 },
  { id: "#PRD009", name: "Desk Lamp", description: "LED, touch control", qty: 8 },
  { id: "#PRD010", name: "USB Hub", description: "4-port, USB 3.0", qty: 25 },
];

const LOW_STOCK_THRESHOLD = 10;

const Products = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const products =
    selectedTab === 0
      ? allProducts
      : allProducts.filter(p => p.qty < LOW_STOCK_THRESHOLD).sort((a, b) => a.qty - b.qty);

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2} color="white">Products</Typography>
      <Stack direction="row" spacing={2} mb={3} alignItems="center">
        {filterTabs.map((tab, i) => (
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
        <Box flex={1} />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#232323",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 3,
            textTransform: "none",
            px: 4,
            boxShadow: "none",
            "&:hover": { bgcolor: "#111" }
          }}
        >
          Add +
        </Button>
      </Stack>
      <Stack spacing={2}>
        {products.map((product, i) => {
          const isLowStock = product.qty < LOW_STOCK_THRESHOLD;
          return (
            <Paper
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#232323",
                p: 2,
                borderRadius: 3,
                border: isLowStock ? "2px solid #ff3b3b" : "2px solid transparent",
                boxShadow: isLowStock ? "0 0 10px 2px #ff3b3b44" : undefined,
                transition: "box-shadow 0.2s, border 0.2s"
              }}
            >
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#2b2b2b", mr: 2 }} />
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={700} color="#bbb">{product.id}</Typography>
                <Typography color="#bbb">{product.name}</Typography>
                <Typography color="#bbb">{product.description}</Typography>
                <Typography color={isLowStock ? "#ff3b3b" : "#666"} fontSize={14}>
                  Qty: {product.qty} {isLowStock && <b>(Low stock)</b>}
                </Typography>
              </Box>
              <Box sx={{ color: "#bbb", fontSize: 32, ml: 2 }}>{'>'}</Box>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Products;