import { Box, Button, Grid, Typography } from "@mui/material";
import Cart from "components/Cart";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      xs={12}
      sx={{
        padding: "10px 0px",
      }}
    >
      <Typography variant="h4">e-champions</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
        <Link to="/contact">
          <Button color="primary">Contato</Button>
        </Link>
        <Cart />
      </Box>
    </Grid>
  );
};

export default Header;
