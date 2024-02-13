import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import HeaderProduct from "./components/Header";
import Home from "./components/Home";
import ListProduct from "./components/ListProduct";
import { useState } from "react";
import EditProduct from "./components/EditProduct";

function App() {
  const [product, setProduct] = useState([]);
  const [edit, setEdit] = useState(0);
  // ! create
  function createProduct(obj) {
    let data = JSON.parse(localStorage.getItem("react-todo")) || [];
    data.push(obj);
    localStorage.setItem("react-todo", JSON.stringify(data));
  }
  // ! read
  function readProduct() {
    let data = JSON.parse(localStorage.getItem("react-todo")) || [];
    setProduct(data);
  }

  //! delete
  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("react-todo")) || [];
    let newData = data.filter((el) => el.id !== id);
    localStorage.setItem("react-todo", JSON.stringify(newData));
    readProduct();
  }

  //! edit
  function editProduct(id) {
    let data = JSON.parse(localStorage.getItem("react-todo")) || [];
  }

  return (
    <>
      <HeaderProduct />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<AddProduct createProduct={createProduct} />}
        />
        <Route
          path="/list"
          element={
            <ListProduct
              deleteProduct={deleteProduct}
              readProduct={readProduct}
              product={product}
            />
          }
        />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
