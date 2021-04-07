import React, { Fragment, useState } from "react";
import "./style.css";
import { validateQuantity } from "../utils";
import { ModifyQuantityForm } from "./ModifyQuantityForm";

export const DisplayProduct = (props) => {
  const [isModify, setModify] = useState(false);

  const handleUpdate = (newQuantity) => {
    if (validateQuantity(newQuantity) === false) {
      window.alert("Product Quantity is not valid");
    } else {
      props.updateQuantity(newQuantity, props.product, props.product.id);
      setModify(false);
    }
  };

  return (
    <Fragment>
      <tr>
        <td>{props.product.name}</td>
        <td>{props.product.quantity}</td>
        <td>
          <button
            onClick={() => setModify(true)}
            className=" btn btn-outline-warning mx-2"
          >
            Modify
          </button>
          <button
            onClick={() => {
              props.delete(props.product.id);
            }}
            className=" btn btn-outline-warning mx-2"
          >
            Delete
          </button>
        </td>
      </tr>
      {isModify && (
        <ModifyQuantityForm
          handleUpdate={handleUpdate}
          product={props.product}
          handleCancel={() => setModify(false)}
        />
      )}
    </Fragment>
  );
};
