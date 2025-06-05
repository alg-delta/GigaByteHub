import React from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";

export default function Main({ products, add }) {
  return (
    <Row className="gap-3" style={{ marginTop: "30px" }}>
      {products.map(
        (product) => (
          <Product key={product.id} product={product} add={add} />
        )
        //  <p key={product.id}>{product.name}</p>
      )}
    </Row>
  );
}
