import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from "./components/Nav.jsx"
import './App.css'
import Cardholder from './components/Cardholder.jsx'
// import Count from './components/Count.jsx'

//  each componetnt contains some state --> we have to updare it?
//       Topic -> useState -> hook 
//       import -> useState ffrom -> react,syntax -> var/let/const [var_name,func_name


function App() {

  // var [count, setCount] = useState(0);
  // var[msg,setMsg]=useState("Before Click me btn is hitted");

  // function handleClick() {
  //   setCount(++count);
  //   setMsg("After btn hitted msg got change")
  // }

  return (
    <>
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path='/card' element={<Cardholder/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Cardholder /> */}
      {/* <Count/> */}

      {/* <p>Count:{count}</p>
      <p>{msg}</p>
      <button type="button" onClick={handleClick}>Click me</button>
 */}








      {/* 
<div className='navbar'>
        <div className='logo'>
          <h1>MY LOGO</h1>
        </div>
        <div className='link'>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className="menubar">
          <p className="bar1"></p>
          <p className="bar1"></p>
          <p className="bar1"></p>
        </div>
      </div>
      <br /> */}


      {/* <Cardholder /> */}
      {/* <section>
        <div className="container">
          <div className="haha">
            <div className="img1">
              <img src="https://images.unsplash.com/photo-1765790859163-53e82c11775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" />
            </div>
            <div className="img2">
              <img src="https://images.unsplash.com/photo-1766469284258-11bf4223e2af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
            </div>
            <div className="img3">
              <img src="https://plus.unsplash.com/premium_photo-1764546983177-c2342bef9ebf?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="img4">
              <img src="https://images.unsplash.com/photo-1766229293940-a0027f1dcbce?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="img5">
              <img src="https://plus.unsplash.com/premium_photo-1766340004511-ba77746681c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="img6">
              <img src="https://images.unsplash.com/photo-1766145605687-fde866d32ae1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="img7">
              <img src="https://images.unsplash.com/photo-1765126110664-34cbf8f1cd46?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="section">

        <div className="left">
          <img src={"https://plus.unsplash.com/premium_photo-1765821002828-1c56206bec2a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" width={"100%"} />
          <h3>Christmas Decor</h3>
          <p>A Christmas tree is a beautifully decorated evergreen tree that stands as one of the most cherished symbols of Christmas. Traditionally made from pine, fir, or spruce, its rich green color represents life and hope during the winter season.</p>
          <br />   <button>Click me!!!</button>
        </div>

        <div className="right">
          <img src={"https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" width={"100%"} />
          <br />
          <h3>Where the Ocean Meets the Stormy Sky</h3>
          <p>This image captures a dramatic coastal scene at sunset, where powerful ocean waves crash against dark, rugged rocks in the foreground. The water appears silky and energetic, suggesting a long-exposure effect that emphasizes the motion and force of the sea.</p>
          <br />  <button>Click me!!!</button>
        </div>
      </div>

      <div className="section-2">
        <div className="item-1">
          <img src={"https://github.com/Anisha-Chhajer-Jain/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-1.png?raw=true"} />
          <h5>Spiderman</h5>
          <h1>12</h1>
        </div>
        <div className="item-2">
          <img src={"https://github.com/Anisha-Chhajer-Jain/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-3.png?raw=true"} />
          <h5>Wonder<br />Women</h5>
          <h1>30</h1>
        </div>

        <div class="marks">
          <h1>5-0</h1>
        </div>

        <div className="item-3">
          <img src={"https://github.com/Anisha-Chhajer-Jain/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-2.png?raw=true"} />
          <h5>Captain<br />America</h5>
          <h1>50</h1>
        </div>
        <div className="item-4">
          <img src={"https://github.com/Anisha-Chhajer-Jain/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-4.png?raw=true"} />
          <h5>Gem Woman</h5>
          <h1>12</h1>
        </div>
      </div>

      <br /><br />

      <div className="section3">
        <div className="calculator">
          <div className="display">
            <p>7744</p>
          </div>
          <div className="buttons">
            <button className="gray">C</button>
            <button className="gray">+/-</button>
            <button className="gray">%</button>
            <button className="orange">÷</button>

            <button className="dark">7</button>
            <button className="dark">8</button>
            <button className="dark">9</button>
            <button className="btn orange">×</button>

            <button className="dark">4</button>
            <button className="dark">5</button>
            <button className="dark">6</button>
            <button className="orange">−</button>

            <button className="dark">1</button>
            <button className="dark">2</button>
            <button className="dark">3</button>
            <button className="orange">+</button>

            <button className="dark_zero">0</button>
            <button className="dark">.</button>
            <button className="orange">=</button>
          </div>
        </div>
      </div> */}
    </>

  )
}

export default App
