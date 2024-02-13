import React, { useState } from "react";

const AddProduct = ({ createProduct }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  function addData() {
    let obj = {
      name: name,
      lastName: lastName,
      id: Date.now(),
    };
    createProduct(obj);
  }
  return (
    <div className="container">
      <div className="content">
        <div className="conBlock">
          <h1>Todo</h1>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input1"
              type="text"
              placeholder="LastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button className="createBtn" onClick={addData}>
            create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
