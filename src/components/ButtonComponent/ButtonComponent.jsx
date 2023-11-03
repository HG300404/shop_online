import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  disabled,
  ...rests
}) => {
  return (
    <Button
      style={{
        ...styleButton,
        background: disabled ? "#ccc" : styleButton.backgroundColor,
      }}
      size={size}
      // icon={<SearchOutlined style={{ color: { colorButton } }} />}

      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
