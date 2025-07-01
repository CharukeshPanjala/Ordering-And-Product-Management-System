import React from "react";
import { Box, Typography, TextField, Paper, Button } from "@mui/material";

const CreateProduct = () => (
  <Box>
    <Typography variant="h5" fontWeight={700} mb={4}>Create New Product</Typography>
    <Paper sx={{ p: 3, bgcolor: "#232323", borderRadius: 4, maxWidth: 500, mx: "auto" }}>
      <TextField label="Product Name" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
      <TextField label="Description" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
      <TextField label="Quantity" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
      <TextField label="Price" fullWidth margin="normal" variant="filled" sx={{ bgcolor: "#262626" }} />
      <Box textAlign="right" mt={2}>
        <Button variant="contained" sx={{
          bgcolor: "#232323", color: "#fff", borderRadius: 3, fontWeight: 700, px: 5, py: 1.5, fontSize: 18, boxShadow: "none",
          "&:hover": { bgcolor: "#111" }
        }}>
          Create
        </Button>
      </Box>
    </Paper>
  </Box>
);

export default CreateProduct;
