import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="link">
      <Link to={`/item/${product.id}`}>
        <div className=" card  link__item" style={{ width: "15rem" }}>
          <div className="counter__content">
            <h5 className="card-title">{name}</h5>
            <img
              src={image}
              className="card-img-top"
              alt="Imagen de Producto"
            />
            
            <h6>{price} ARS</h6>
            <div className="detail">
            <p>Detalles</p>
          </div>
          </div>
         
        </div>
      </Link>
    </div>
  );
};

export default Item;
