import React, { useState } from "react";

function Product() {
  const [state, setState] = useState(1);
  return (
    <div>
      <div className="use">
        <h1 style={{ textAlign: "center" }}>{state}</h1>

        <button className="btn" onClick={() => setState(state + 1)}>
          Click + 1
        </button>
        <button
          className="btn"
          onClick={() => setState(state > 1 ? state - 1 : state)}
        >
          Click - 1
        </button>
        <button
          className="Reset
"
          onClick={() => setState(state - state + 1)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Product;
