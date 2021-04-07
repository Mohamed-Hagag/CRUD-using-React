import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { InputsForm } from "./components/InputsForm";
import { ProductsList } from "./components/ProductsList";
import { SearchForm } from "./components/SearchForm";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const addProduct = (productName, productQuantity) => {
    axios
      .post(
        "https://inventory-system-481b5-default-rtdb.firebaseio.com/products.json",
        {
          name: productName,
          quantity: productQuantity,
        }
      )
      .then((res) =>
        setProducts([
          ...products,
          {
            name: productName,
            quantity: productQuantity,
          },
        ])
      );
  };

  useEffect(() => {
    axios
      .get(
        "https://inventory-system-481b5-default-rtdb.firebaseio.com/products.json"
      )
      .then((res) => {
        const fetchedProducts = [];
        for (let key in res.data) {
          fetchedProducts.push({ ...res.data[key], id: key });
        }
        setProducts(fetchedProducts);
      });
  }, []);

  const deleteProduct = (id) => {
    if (window.confirm("Delete the item?")) {
      axios.delete(
        `https://inventory-system-481b5-default-rtdb.firebaseio.com/products/${id}.json`
      );
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    }
  };

  const updateQuantity = (newValue, product, id) => {
    axios
      .put(
        `https://inventory-system-481b5-default-rtdb.firebaseio.com/products/${id}.json`,
        { name: product.name, quantity: newValue }
      )
      .then((res) => {
        const filteredProducts = products.filter((prod) => prod.id !== id);
        setProducts([...filteredProducts, res.data]);
      });
  };

  return (
    <Fragment>
      <InputsForm addProduct={addProduct} />
      <SearchForm setSearch={setSearch} />
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Quantity</th>
          <th></th>
        </thead>
        <tbody>
          <ProductsList
            products={products}
            search={search}
            updateQuantity={updateQuantity}
            deleteProduct={deleteProduct}
            setProducts={setProducts}
          />
        </tbody>
      </table>
    </Fragment>
  );
};
