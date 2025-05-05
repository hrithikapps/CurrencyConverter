// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Exchange Rate", path: "/exchange" },
  { label: "About", path: "/about" },
  { label: "Error Page", path: "/error" },
];


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Loan Calculator</Typography>

        <Box display="flex" gap={2} alignItems="center">
          {navLinks.map((link) => (
            <NavItem key={link.path} {...link} />
          ))}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
