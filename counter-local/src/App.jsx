// import { useState, useEffect } from "react";

// function App() {
//   // Get initial value from localStorage
//   const [count, setCount] = useState(() => {
//     const storedCount = localStorage.getItem("count");
//     return storedCount ? JSON.parse(storedCount) : 0;
//   });

//   // Update localStorage whenever count changes
//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>

//       <button onClick={() => setCount(prev => prev + 1)}>
//         Increment
//       </button>

//       <button
//         onClick={() => setCount(prev => prev - 1)}
//         style={{ margin: "10px" }}
//       >
//         Decrement
//       </button>

//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(JSON.parse(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter:--</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>

      <button onClick={() => setCount(prev => prev - 1)} style={{ margin: "10px" }}>Decrement</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
