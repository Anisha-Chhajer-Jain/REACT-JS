// // // // import React from "react";
// // // // import './App.css'

// // // // function FruitsList() {
// // // //   // const fruits = ["Apple", "Mango", "Guava"];
// // // //   const fruits = ["Apple","Mango","Guava"];

// // // //   return (
// // // //     <div>
// // // //       <h2>Fruits List</h2>
// // // //       <ul>
// // // //         {fruits.map((fruit, index) => (
// // // //           <li key={index}>
// // // //             {fruit}
// // // //             <button style={{marginLeft:"10px",gap:"10px"}}>Click Me</button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default FruitsList;





// // // //Task-2 by adding functionality to the buttons and removing that button

// // // // import React,{useState} from "react";
// // // // import './App.css'

// // // // function FruitsList() {
// // // //   const [fruits, setFruits] = useState(["Apple", "Mango", "Guava"]);

// // // //   const removeFruit = (fruitToRemove) => {
// // // //   setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
// // // // };

// // // //   return (
// // // //     <div>
// // // //       <h2>Fruits List</h2>
// // // //       <ul>
// // // //         {fruits.map((fruit, index) => (
// // // //           <li key={index}>
// // // //             {fruit}
// // // //             <button onClick={() => removeFruit(fruit)}>hahaaha!!</button>

// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default FruitsList;

// // // //Task-3
// // // import React, { useState } from "react";
// // // import './App.css'

// // // function FruitsList() {
// // //   const [fruits, setFruits] = useState([
// // //     {name: "Apple" },
// // //     {name: "Mango" },
// // //     {name: "Guava" }
// // //   ]);

// // //   const removeFruit = (idToRemove) => {
// // //     setFruits(fruits.filter(fruit => fruit.name !== idToRemove));
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Fruits List</h2>
// // //       <ul>
// // //         {fruits.map(fruit => (
// // //           <li key={fruit.name}>
// // //             {fruit.name}
// // //             <button onClick={() => removeFruit(fruit.name)}>hahhaha</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default FruitsList;


// // import React, { useState } from "react";

// // function ToggleExample() {
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   return (
// //     <div>
// //       {
// //         isLoaded ? (
// //           <div>
// //             <h2>Data Loaded</h2>
// //             <p>Fruits data is available.</p>
// //           </div>
// //         ) : (
// //           <div>
// //             <h2>Error Occurred</h2>
// //             <button onClick={() => setIsLoaded(true)}>
// //               Load Data
// //             </button>
// //           </div>
// //         )
// //       }
// //     </div>
// //   );
// // }

// // export default ToggleExample;


// import React, { useState } from "react";
// import './App.css'
// function Toggle() {
//   const [isTrue, setIsTrue] = useState(false);

//   return (
//     <div>
//       {isTrue ? (<div>
//             <p>Data loaded hahaha</p>
//             <button onClick={() => setIsTrue(false)}>error show</button>
//           </div>) 
//         :
//         (<div>
//             <p>Error occur</p>
//             <button onClick={() => setIsTrue(true)}>load data </button>
//           </div>)
//       }
//     </div>
//   );
// }

// export default Toggle;
import React from "react";
import Parent from "./components/Parent.jsx";
import './App.css'

function App() {
  return (
    <div>
      <h2>Parent and Child Components</h2>
      <Parent />
    </div>
  );
}

export default App;
