import React from "react";
import ButtonSelector from "./ButtonSelector";
import "./menu.css";

const breackfast = [
  { id: 1, item: "Café americano", valor: 5.0 },
  { id: 2, item: "Café com leite ", valor: 7.0 },
  { id: 3, item: "Misto Quente", valor: 10.0 },
  { id: 4, item: "Suco de fruta natural", valor: 7.0 },
];

const Total = () => {
  const creatTable = () => {
    return breackfast.map((product) => {
      return (
        <tr>
          <td colSpan="2">{product.item}</td>
          <td align="center">{product.valor}</td>
          <td align="center">
            {
              <ButtonSelector className="button-selecto button-selector-dinner" />
            }
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="table-total">
        <thead>
          <th align="start" className="menu-item">
            Item
          </th>
          <th className="menu-type">Total</th>
          <th className="menu-value">valor</th>
          <th></th>
        </thead>
        <tbody>{creatTable()}</tbody>
        <tr>
          <td colSpan="4" className="resume"></td>
        </tr>
        <tr>
          <td colSpan="2">Total</td>
          <td align="center">2</td>
          <td>
            <ButtonSelector className="button-selecto button-selector-dinner" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Total;
