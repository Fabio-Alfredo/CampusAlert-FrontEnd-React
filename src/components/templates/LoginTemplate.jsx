import React from "react";
import AuthLayout from "../organisms/AuthLayout";
import LoginForm from "../molecules/LoginForm";

const LoginTemplate = () => {
  return (
    <AuthLayout title="Inicio de Sesion">
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginTemplate;
