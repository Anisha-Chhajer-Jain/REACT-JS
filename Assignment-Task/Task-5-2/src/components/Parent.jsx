import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [isChanged, setIsChanged] = useState(false);

  const changeColors = () => {
    setIsChanged(prev => !prev);
  };

  return (
    <div>
      <h4
        style={{
          color: isChanged ? "white" : "black",
          backgroundColor: isChanged ? "blue" : "lightgray",
          padding: "10px",
        width : "170px"
        }}
      >
        First Element
      </h4>

      <h4
        style={{
          color: isChanged ? "yellow" : "green",
          backgroundColor: isChanged ? "black" : "pink",
          padding: "10px",
          width : "170px"
        }}
      >
        Second Element
      </h4>

      <Child onChangeColor={changeColors} />
    </div>
  );
}

export default Parent;
