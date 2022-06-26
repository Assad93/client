import { Badge, Button, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart: React.FC = () => {
  return (
    <>
      <Button
        variant="contained"
        aria-label="cart"
        sx={{
          padding: "10px",
        }}
      >
        <Badge
          badgeContent={2}
          color={"success"}
          sx={{
            "& .MuiBadge-badge": {
              right: -3,
              top: 3,
            },
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </>
  );
};

export default Cart;
