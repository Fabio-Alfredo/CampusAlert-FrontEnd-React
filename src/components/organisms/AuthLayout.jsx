import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const AuthLayout = ({ title, children }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3}
        sx={{
          p: { xs: 3, sm: 4, md: 6 },
          width: { xs: "90%", sm: "400px", md: "500px" },
          maxWidth: "500px"
        }}
      >
        <Typography variant="h5" mb={2} align="center">
          {title}
        </Typography>
        {children}
      </Paper>
    </Box>
  )
}

export default AuthLayout;
