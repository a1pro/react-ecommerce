import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Router } from "@reach/router";

//Pages
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";

function App() {
  return (
    <main className="" style={{ height: "100vh", overflowY: "auto" }}>
      <Header />
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in" />
        <Register path="register" />
        <ProductDetails path="product-details/:productId" />
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;