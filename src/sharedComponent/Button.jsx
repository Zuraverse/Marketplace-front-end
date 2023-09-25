import { Button as ButtonAnt } from "antd";

const Button = ({ onClick, text }) => {
  return (
    <ButtonAnt type="primary" onClick={onClick}>
      {text}
    </ButtonAnt>
  );
};

export default Button;
