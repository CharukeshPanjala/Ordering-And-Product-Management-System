import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { ReactComponent as AlienIcon } from './alien-svgrepo-com.svg';


const navItems = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Orders", icon: <ShoppingCartIcon /> },
  { label: "Products", icon: <StorefrontIcon /> },
  { label: "Create Orders", icon: <NoteAddIcon /> },
  { label: "Report/ Analytics", icon: <BarChartIcon /> },
  { label: "Profile Settings", icon: <SettingsIcon /> },
];

const Sidebar = ({ selected = 0, onSelect }: { selected: number, onSelect: (index: number) => void }) => (
  <Box
    sx={{
      width: 220,
      minHeight: "100vh",
      background: "#171717",
      color: "#fff",
      p: 2,
      pt: 4,
      boxSizing: "border-box",
    }}
  >
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          p: 2,
          textAlign: "center",
          borderRadius: 1,
          fontWeight: 700,
          fontSize: 20,
        }}
      >
       {/* @ts-ignore */}
      <AlienIcon width={80} height={80} />
      </Box>
    </Box>
    <List>
      {navItems.map((item, i) => (
        <ListItemButton
          key={item.label}
          selected={selected === i}
          sx={{
            borderRadius: 2,
            mb: 1,
            background: selected === i ? "#262626" : "transparent",
            color: selected === i ? "#fff" : "#bbb",
          }}
          onClick={() => onSelect(i)}
        >
          <ListItemIcon sx={{ color: selected === i ? "#fff" : "#bbb" }}>{item.icon}</ListItemIcon>
          <ListItemText
            primary={<Typography fontWeight={selected === i ? 700 : 400}>{item.label}</Typography>}
          />
        </ListItemButton>
      ))}
    </List>
  </Box>
);

export default Sidebar;
