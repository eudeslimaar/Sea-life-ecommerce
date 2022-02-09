import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import Payments from "../../components/Payments/Payments";
import Logo from "../../assets/lifesea.png"

import "./Home.css";

const Home = ({ onAdd }) => {
    return (
      
      <main className="home">
        <div className="hero">
          <div className="home__title">
            <img src={Logo} alt="logo" />
            <p>Los mejores accesorios para que disfrutes de la naturaleza.</p>
          </div>
        </div>
        
        
        <Payments />
        <ItemList onAdd={onAdd} />
      </main>
    );
  };
  
  export default Home;