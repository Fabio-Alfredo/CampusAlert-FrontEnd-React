import AuthLayout from "../organisms/AuthLayout";
import RegisterForm from "../molecules/RegisterForm";
import React from "react";

const RegisterTemplate = () => {
  return (
    <AuthLayout title="Registro de Usuarios">
      <RegisterForm />
    </AuthLayout>
  )
}


export default RegisterTemplate;
