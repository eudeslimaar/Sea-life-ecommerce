import React, { useEffect, useContext } from "react";

import CartContext from "../../Context/CartContext";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidjet = () => {
  const { cart, qnt, setQnt } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setQnt(0);
    }
  }, [cart, setQnt]);

  return (
    <Badge badgeContent={qnt} color="secondary">
      <ShoppingCartIcon fontSize="large" />
    </Badge>
  );
};

export default CartWidjet;
