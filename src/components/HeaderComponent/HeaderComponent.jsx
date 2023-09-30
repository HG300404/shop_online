import React from "react";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>HA Kingdom</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Search"
            placeholder="Input search text"
            bordered={false}
            //   onSearch={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: "30px" }} />
            </div>
            <div>
              <WrapperTextHeaderSmall>Login/Register</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <WrapperHeaderAccount>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </WrapperHeaderAccount>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
