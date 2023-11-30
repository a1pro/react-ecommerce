import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import "./product-details.css";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import Footer from "../components/Footer";

const ProductDetails = (props) => {
  const [productData, setProductData] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${props.productId}`
    ).then((res) => res.json());
    setProductData(await res);
  };
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center mt-5">
          <Col xs={10} md={7} lg={5} className="p-0">
            <Lightbox
              images={[
                {
                  src: productData.image,
                  title: productData.title,
                  description: "img 1",
                },
                {
                  src: productData.image,
                  title: productData.title,
                  description: "img 2",
                },
                {
                  src: productData.image,
                  title: productData.title,
                  description: "img 3",
                },
                {
                  src: productData.image,
                  title: productData.title,
                  description: "img 4",
                },
              ]}
            />
          </Col>
          <Col xs={10} md={7} lg={7} className="product-details">
            <h1>{productData.title}</h1>
            <Button
              onClick={() => addItem(productData)}
              className=""
              style={{
                borderRadius: "5px",
                border: 0,
                backgroundColor: "#fd8a29",
              }}
            >
              <BsCartPlus size="1.8rem" />
              Add to cart
            </Button>
            <br />
            <b className="h4 mt-3 d-block">Rs. {productData.price}</b>
            <br />
            <b className="h5">4.1 ⭐</b>
            <p
              className="mt-3 h5"
              style={{ opacity: "0.8", fontWeight: "400" }}
            >
              {productData.description}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
