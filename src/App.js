import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import Cart from "./card/cart";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <>
      <CartProvider>
        <div className="row">
          <Home />
        </div>
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
