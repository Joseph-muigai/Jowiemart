import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import products from "../assets/data/products";
import productImg from "../assets/images/arm-chair-01.jpg";

const AllProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={productImg} alt="product image" />
                  </td>
                  <td>Arm Chair</td>
                  <td>Chair</td>
                  <td>$500</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
