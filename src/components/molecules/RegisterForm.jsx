import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Buttom";
import { Box } from "@mui/material";

const RegisterForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "end" }}>
      <Input label="username" name="username" />
      <Input label="email" name="email" type="email" />
      <Input label="password" name="password" type="password" />
      <Button type="submit" sx={{ width: "150px", }} >
        Registrarse
      </Button>
    </Box>
  )
}

export default RegisterForm;
