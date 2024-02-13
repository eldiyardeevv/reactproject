import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListProduct = ({ readProduct, product, deleteProduct }) => {
  const navigate = useNavigate();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div>
      {product.map((el) => (
        <>
          <h1>{el.name}</h1>
          <h1>{el.lastName}</h1>
          <button onClick={() => deleteProduct(el.id)}>delete</button>
          <button onClick={() => navigate(`/edit/${el.id}`)}>edit</button>
        </>
      ))}
    </div>
  );
};

export default ListProduct;
