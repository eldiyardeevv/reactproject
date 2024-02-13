import React, { useEffect, useState } from "react";

const TodoCart = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [img, setImg] = useState("");
  const [click, setClick] = useState(false);
  const todoCart = () => {
    let obj = {
      name: name,
      lastName: lastName,
      img: img,
    };
    let data = JSON.parse(localStorage.getItem("todo")) || [];
    data.push(obj);
    localStorage.setItem("todo", JSON.stringify(data));
  };

  let newData = JSON.parse(localStorage.getItem("todo")) || [];
  useEffect(() => {
    todoCart();
  }, [click]);

  return (
    <>
      <div className="box">
        <h2>TODO</h2>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div>
          <input
            className="inp2"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            placeholder="img"
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            setClick(!click);
            todoCart();
          }}
        >
          ADD
        </button>
      </div>
      <div>
        {newData.map((el) => (
          <div className="block">
            <h3>{el.name}</h3>
            <h3>{el.lastName}</h3>
            <img src={el.img} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoCart;
