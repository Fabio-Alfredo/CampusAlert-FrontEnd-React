import React from "react";
import { TextField } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const PasswordInput = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);


  return (
    <TextField
      id="filled-basic"
      label={label}
      type={showPassword ? "text" : "password"}
      variant="filled"
      fullWidth{...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleToggle}
              arial-label={
                showPassword ? 'hide the password' : 'display de password'
              }
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default PasswordInput;
