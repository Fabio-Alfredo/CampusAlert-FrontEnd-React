import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, type = "text", ...props }) => {
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      type={type}
      fullWidth{...props}
    />
  )
}

export default Input;
