import React from "react";

function Child({ onChangeColor }) {
  return (
    <button onClick={onChangeColor}>
      Change Colors
    </button>
  );
}

export default Child;
