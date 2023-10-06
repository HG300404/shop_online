import { Col, Row, Image } from "antd";
import React from "react";
import imageProduct from "../../assets/images/top2.jfif";
const ProductDetailsComponent = () => {
  return (
    <Row>
      <Col span={10}>
        <Image src={imageProduct} alt="Image Product" />
      </Col>
      <Col span={14}></Col>
    </Row>
  );
};
export default ProductDetailsComponent;
