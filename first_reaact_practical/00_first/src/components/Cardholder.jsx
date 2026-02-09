import React from 'react'

import { useState, useEffect } from 'react'
import Card from "./nav/Card.jsx"
import "./cardholder.css"
//process -> API -> hook -> useEffect
//usbEffect -> syntax -> useEffect(callback function, dependency -> Array)
//callback -> internal function
//addEventListner(actiion, ()=>{})

// export default function Cardholder(Element) {
//   var [count, setCount] = useState(0);
//   var[name,setName]=useState("Prashu")


//   function handleClick() {
//     setCount(++count);
//   }
//  function handleClick2() {
//     setName("Anisha");
//   }
//   useEffect(() => {
//     console.log("name got changed")
//   }, [name]);

//  useEffect(() => {
//     console.log("useEffect called")
//   }, [count]);

export default function Cardholder(Element) {
  var [count, setCount] = useState(0);
  var [count1, setCount1] = useState(100);
  var obj;
  function handleClick() {
    setCount(++count);
  }
  function handleClick2() {
    setCount1(--count1);
  }
  useEffect(() => {
    console.log("Name got changed");
  })
  // useEffect(() => {
  //   fetch("https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=e07117f9ce5bfaac6399b6f6e3a2e537")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       obj = data;
  //       console.log(obj.totalArticles);
  //     })
  // }, []);

  useEffect(()=>{
console. log(`UseEffect is called: ${count} `);
fetch("https://api.mfapi.in/mf")
.then(res => res. json( ) )
.then (data => {
console.log(data);
setName(data[0].schemeName)
})
 }, []);

  return (
    <div>
      <Card />
      {/* <Card image="https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="hhahhah"/> */}
      <div className="content">
        <div className="card">
          <div className='imageContainer'><img src={Element.image} alt="" className="image" /></div>
          <p className="title">{Element.title}</p>
          <p className="desc">{Element.desc}</p>
          <p>{Element.num}</p>
          <p>count: {count}</p>
          <button className='btn' onClick={handleClick}>Read More</button>
          <p>count: {count}</p>
          <button className='btn' onClick={handleClick2}>Read More</button>
        </div>
      </div>
    </div>
  )
}

// export default function Cardholder(props) {
// return (
// <div className="content">
// <div className="card">
// <div className='imagerontinon'\/ima cnc- (nnops.image} alt="" className="image" /></div>
// <p className="title"> (parameter) props: any
// <p className="desc">{props,desc}</p>
// <button className='btn'>Read More</button>
// </div>
// </div>