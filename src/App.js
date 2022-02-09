import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "./Context/CartContext";
//components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import Form from "./pages/Form/Form";
import CssBaseline from '@mui/material/CssBaseline'
import './App.css';


function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Sea Life";
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <BrowserRouter>
          <CssBaseline>
            <NavBar />
              <Routes>
                <Route exact path="/" element={<Home greeting={greeting} />}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/form" element={<Form />}/> 
                <Route path="/item/:id" element={<ItemDetailPage />}/>
                <Route path="/categories/:categoryId" element={<Categories />}/>
                <Route path="/cart" element={<Cart />}/>
              </Routes>
            <Footer />
          </CssBaseline>
        </BrowserRouter>
      </CartContext.Provider>
      
    </div>
  );
}

export default App;
