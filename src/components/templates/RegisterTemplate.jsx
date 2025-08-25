import AuthLayout from "../organisms/AuthLayout";
import RegisterForm from "../molecules/RegisterForm";
import React from "react";

const RegisterTemplate = () => {
  return (
    <AuthLayout title="Registro de Usuarios">
      <RegisterForm />
      <Box mt={2}>
        <p className="text-center">
          ¿Ya tienes una cuenta con nosotros?
          <Link className="text-blue-500 underline">
            Iniciar Sesión
          </Link>
        </p>
      </Box>
    </AuthLayout>
  )
}


export default RegisterTemplate;
