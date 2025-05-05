// src/components/ThemeToggle.jsx
import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useThemeMode } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <FormControlLabel
      control={
        <Switch
          checked={mode === "dark"}
          onChange={toggleTheme}
          name="themeToggle"
          color="default"
        />
      }
      label={mode === "dark" ? "Dark" : "Light"}
    />
  );
};

export default ThemeToggle;
