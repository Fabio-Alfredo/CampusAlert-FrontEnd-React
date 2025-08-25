import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Buttom";
import { Box } from "@mui/material";
import PasswordInput from "../atoms/PasswordInput";


const LoginForm = () => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "end" }}>
      <Input label="Identifier" type="text" />
      <PasswordInput label="password" />
      <Button type="submit" sx={{ width: "150px", }}>
        Iniciar Sesion
      </Button>
    </Box>
  )
}

export default LoginForm;
