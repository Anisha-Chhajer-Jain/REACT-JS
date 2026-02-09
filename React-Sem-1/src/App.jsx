// // import React, { useEffect } from 'react'
// // import Child1 from './components/Child1.jsx';
// // import Timer from './components/Timer.jsx';

// // export default function App() {
// //   useEffect(()=>{
// //     console.log("First time rendered but in function component in App file")
// //   }, []);
// // return (
// //   // <div>
// //   //   <Child1/>
// //   //   <p>Mounting happened using Class Components</p>
// //   // </div>
// //   <div>
// //     {visible && <Timer/>}
// //     <button onClick={()=>setVisible(!visisble)}>Click me</button>
// //   </div>
// // )
// //   }

// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   state = {count : 0, name : "anisha chhajer"}
// //   render() {
// //     return (
// //       <div>
// //         <p>Current value of count is: {this.state.count}</p>
// //         <p>Name is : {this.state.name}</p>
// //         <p>used in class component</p>
// //        <button>Click me</button> 
// //       </div>
// //     )
// //   }
// // }


// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   state = {count : 0, name : "anisha chhajer"}

// //   increment = ()=>{
// //     this.setState({count : this.state.count+1})
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <p>Current value of count is: {this.state.count}</p>
// //         <p>Name is : {this.state.name}</p>
// //         <p>used in class component</p>
// //         <button onClick={this.increment}>Inc</button> 
// //        <button onClick={()=>{this.setState({count : this.state.count-1})}}>Dec</button> 
// //       </div>
// //     )
// //   }
// // }



// import React, { Component } from 'react';

// export default class App extends Component {
//   state = {
//     count: 0,
//     name: "anisha chhajer"
//   };

//   render() {
//     if (this.state.count === 0) {
//       return (
//         <>
//           <p>
//             Current count value is : {this.state.count} that's why IF condition got executed
//           </p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Inc
//           </button>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <p>
//             Current count value is : {this.state.count} that's why ELSE condition got executed
//           </p>
//         </>
//       );
//     }
//   }
// }
