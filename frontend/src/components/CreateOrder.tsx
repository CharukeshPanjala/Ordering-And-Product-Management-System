import React from "react";
import { Box, Typography, TextField, Paper, Button, Grid } from "@mui/material";

const CreateOrder = () => (
  <Box>
    <Typography variant="h5" fontWeight={700} mb={4}>Create New Order</Typography>
    <Grid container spacing={4}>
      {/* @ts-ignore */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, bgcolor: "#232323", borderRadius: 4 }}>
          <Typography fontWeight={700} mb={2}>Customer Details</Typography>
          <TextField label="First Name" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          <TextField label="Last Name" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          <TextField label="Telephone Number" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          <TextField label="Email Address" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField label="City" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
            <TextField label="Postal Code" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          </Box>
          <TextField label="Address" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
        </Paper>
      </Grid>
      {/* @ts-ignore */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, bgcolor: "#232323", borderRadius: 4 }}>
          <Typography fontWeight={700} mb={2}>Product Details</Typography>
          <Box sx={{
            bgcolor: "#2b2b2b", borderRadius: 2, height: 100, mb: 2, display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Typography color="#666" fontSize={40}>🖼️</Typography>
          </Box>
          <TextField label="Product Name" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField label="Price" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
            <TextField label="Qty" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField label="Estimated Tax" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
            <TextField label="Estimated Total" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
    <Box textAlign="right" mt={4}>
      <Button variant="contained" sx={{
        bgcolor: "#232323", color: "#fff", borderRadius: 3, fontWeight: 700, px: 5, py: 1.5, fontSize: 18, boxShadow: "none",
        "&:hover": { bgcolor: "#111" }
      }}>
        Create
      </Button>
    </Box>
  </Box>
);

export default CreateOrder;
