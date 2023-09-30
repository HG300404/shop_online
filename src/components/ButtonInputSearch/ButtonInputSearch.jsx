import { Button } from "antd";
import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(104, 72, 142)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <Button
        size={size}
        icon={<SearchOutlined style={{ color: { colorButton } }} />}
        style={{
          backgroundColor: backgroundColorButton,
          border: !bordered && "none",
        }}
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
