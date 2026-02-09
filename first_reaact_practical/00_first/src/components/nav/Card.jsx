import React from 'react'
import "./card.css"
export default function Card(property) {
  return (
    <div>
      <div className="left">
          <img src={"https://plus.unsplash.com/premium_photo-1765821002828-1c56206bec2a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" width={"100%"} />
          <h3>{property.title}</h3>
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
  )
}