import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Checkout from "../../components/Checkout/Checkout";
import CartContext from "../../Context/CartContext";

import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const messageConditional = (
    <div className="card text-center cart-message">
      <div className="card-header">Huum...</div>
      <div className="card-body">
        <h5 className="card-title">¡Tu carrito está vacío!</h5>
        <p className="card-text">
        ¿No sabes que qué comprar? ¡Aprovecha las ofertas antes de que acabe la temporada de pesca!
        </p>
        <Link to="/" className="btn btn-primary">
          Volver a comprar
        </Link>
      </div>
     
    </div>
  );

  return (
    <div className="cart">
      {cart.length === 0 ? (
        messageConditional
      ) : (
        <div>
          <Table />
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cart;
