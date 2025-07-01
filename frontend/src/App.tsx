import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import CreateOrder from "./components/CreateOrder";
import CreateProduct from "./components/CreateProduct";

function App() {
  const [selected, setSelected] = useState(0);

  let Content = null;
  switch (selected) {
    case 0: Content = <Dashboard />; break;
    case 1: Content = <Orders />; break;
    case 2: Content = <Products />; break;
    case 3: Content = <CreateOrder />; break;
    case 4: Content = <Box sx={{ p: 4, color: "#fff" }}>Report/Analytics (Coming soon)</Box>; break;
    case 5: Content = <Box sx={{ p: 4, color: "#fff" }}>Profile Settings (Coming soon)</Box>; break;
    default: Content = <Dashboard />;
  }

  // For Add+ Product, show CreateProduct
  // (You can improve this with a modal or router if desired)
  // For now, clicking "Add +" in Products does not trigger navigation.

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#171717" }}>
      <Sidebar selected={selected} onSelect={setSelected} />
      <Box sx={{ flex: 1, p: 4 }}>
        {Content}
      </Box>
    </Box>
  );
}

export default App;
