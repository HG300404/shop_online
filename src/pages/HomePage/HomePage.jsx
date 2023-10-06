import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperTypeProduct,
  WrapperProducts,
} from "./style";
import slider1 from "../../assets/images/news-1.jpg";
import slider2 from "../../assets/images/news-2.jpg";
import slider3 from "../../assets/images/news-3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Laptop"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0px 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <WrapperButtonMore
            textButton="Next"
            type="outline"
            styleButton={{
              border: "1px solid rgb(11,116,229)",
              color: "rgb(11,116,229",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{ fontWeight: 500 }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
