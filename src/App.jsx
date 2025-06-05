import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Button from "react-bootstrap/Button";
import Pc from "./components/Pc";
import Zzz from "./components/Zzz";
import Boms from "./components/boms";
import Lolez from "./components/Lolez";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  return (
    <>
      <BrowserRouter basename="/GigaByteHub/">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Col>
                  <Main products={data} add={add} />
                </Col>
                <Col>
                  <Cart cartItems={cartItems} remove={remove} add={add} />
                </Col>
              </Row>
            }
          />
          <Route path="/pc" element={<Pc />} />
          <Route path="/proz" element={<Boms />} />
          <Route path="/ram" element={<p>contact</p>} />
          <Route path="/bzh" element={<p>contact</p>} />
          <Route path="/rom" element={<p>contact</p>} />
          <Route path="/matb" element={<Zzz />} />
          <Route path="/viduha" element={<Lolez />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
