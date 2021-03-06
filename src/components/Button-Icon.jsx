import React from "react";
import "./style.css";

const ButtonIcon = (props) => {
  const clicked = () => {
    props.func(props.product, props.type, props.index);
    props.colorButton &&
      props.colorButton(props.product, props.index, props.type);
  };

  return (
    <div
      className={"button-icon-div " + props.className}
      onClick={() => clicked()}
    >
      <img src={props.img} className="button-icon" />
      {props.name}
    </div>
  );
};

export default ButtonIcon;
