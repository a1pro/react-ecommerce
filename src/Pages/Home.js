import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function getResponse() {
    try {
      const response = await axios.get(
        "https://6565def9eb8bb4b70ef27b64.mockapi.io/api/v3/products"
      );
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getResponse();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      productData.filter((product) => {
        const productTitle = product.title || "";
        return productTitle.toLowerCase().includes(searchInput.toLowerCase());
      })
    );
  }, [searchInput, productData]);

  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col
            xs={10}
            md={7}
            lg={6}
            xl={4}
            className="mb-3 mx-auto text-center"
            style={{ marginTop: "6%" }}
          >
            <h1>Search products</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <BiSearch size="2rem" />
              </InputGroup.Text>
              <FormControl
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Row className="justify-content-center">
            {filteredProducts.map((item, i) => (
              <ProductCard data={item} key={i} />
            ))}
          </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
