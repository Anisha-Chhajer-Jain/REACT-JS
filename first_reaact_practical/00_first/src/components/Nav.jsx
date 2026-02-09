import React from 'react'
import Nav1 from "./nav/Nav1.jsx"
import Nav2 from "./nav/Nav2.jsx"
import "./nav.css"

function Nav(property) {
    console.log(property);
    return (
        <div className='navbar'>
           <Nav1/>
           <Nav2 name="Anisha"/>
        </div>
        
    )
}
export default Nav