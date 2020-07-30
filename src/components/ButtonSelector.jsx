import React, { useState, useEffect } from "react";
import "./buttonSelector.css";

const ButtonSelector = (props) => {
  const [value, setValue] = useState(props.product.amount);

  useEffect(() => {
    value
      ? props.func[0](props.index, props.menu, value)
      : props.func[1](props.product.item);
    (props.product.id === "b1" || props.product.id === "b2") &&
      props.func[2](value, props.product.id);
  }, [value]);

  return (
    <div className={"button-selector " + props.className}>
      <button
        onClick={() => setValue(value > 1 ? value - 1 : 0)}
        className="button-change"
      >
        -
      </button>
      <input className="input-button-selector" type="number" value={value} />
      <button
        onClick={() => setValue(value < 20 ? value + 1 : 20)}
        className="button-change"
      >
        +
      </button>
    </div>
  );
};

export default ButtonSelector;
