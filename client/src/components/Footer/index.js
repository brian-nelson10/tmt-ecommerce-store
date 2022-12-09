import React from "react";
import { Typography, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="xl" alignItems="flex-end" justifyContent="flex-end">
    <Grid container
          sx={{
            position: 'fixed',
            bottom: 0,
            flexGrow: 1,
            
            display: "flex",
            mb: 2,
          }}
        >
          <Grid item alignItems="flex-end" justifyContent="flex-end">
          <Typography variant="caption" color="pink">
          The Missing Teeth &copy; 2022
          </Typography>
          </Grid>
          </Grid>
        </Container>
  );
};

export default Footer;
