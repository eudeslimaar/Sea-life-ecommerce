import React from "react";
import ItemList from "../../components/ItemList/ItemList";


import "./Products.css";

const Products = (onAdd) => {
    return (
      <main className="home">
        <div className="produtos__title">
          <h1>Productos</h1>
        </div>
        
        
        <ItemList onAdd={onAdd} />
      </main>
    );
  };
  
  export default Products;