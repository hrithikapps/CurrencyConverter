import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const NavItem = ({ label, path }) => {
  return (
    <Button
      color="inherit"
      component={NavLink}
      to={path}
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
      })}
    >
      {label}
    </Button>
  );
};

export default NavItem;
