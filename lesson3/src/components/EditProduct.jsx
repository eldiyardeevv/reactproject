import React, { useState } from "react";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  function editProduct() {
    let newObj = {
      name: name,
      lastName: lastName,
      id: Date.now(),
    };
  }
  return (
    <div className="container">
      <div className="content">
        <div className="conBlock">
          <h1>Edit</h1>
          <div>
            <input
              className="inputedit"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="inputedit1"
              type="text"
              placeholder="LastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button className="createBtn" onClick={editProduct}>
            edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
