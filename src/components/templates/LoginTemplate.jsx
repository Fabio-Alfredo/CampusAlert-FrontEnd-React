import React from "react";
import AuthLayout from "../organisms/AuthLayout";
import LoginForm from "../molecules/LoginForm";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const LoginTemplate = () => {
  return (
    <AuthLayout title="Inicio de Sesión">
      <LoginForm />
      <Box mt={2}>
        <p className="text-center">
          ¿Aún no tienes una cuenta con nosotros?
          <Link className="text-blue-500 underline">
            Registrarse
          </Link>
        </p>
      </Box>
    </AuthLayout>
  )
}

export default LoginTemplate;
