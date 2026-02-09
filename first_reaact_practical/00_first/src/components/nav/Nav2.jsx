import React from 'react'
import "./nav2.css"
function Nav2 (property) {
  return (
    <div>
      <div className='link'>
                <p>Home</p>
                <p>{property.name}</p>
                <p>Contact</p>
            </div>
            <div className="menubar">
                <p className="bar1"></p>
                <p className="bar1"></p>
                <p className="bar1"></p>
            </div>
    </div>
  )
}

export default Nav2
