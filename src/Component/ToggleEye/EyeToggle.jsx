// src/Components/Common/EyeToggle.jsx
import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const EyeToggle = ({ visible, onToggle }) => {
  const theme = useTheme();

  return (
    <InputAdornment position="end">
      <IconButton
        onClick={onToggle}
        // prevents field from losing focus when clicking the icon
        onMouseDown={(e) => e.preventDefault()}
        edge="end"
        size="small"
        sx={{ color: theme.palette.primary.dark }}
      >
        {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
      </IconButton>
    </InputAdornment>
  );
};

export default EyeToggle;