import React from "react"
import "./Hero.css"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Navbar() {
    return (
        <>
          <div className="heros">
            <img className="img-heros" src="src/assets/photo-grid.png" alt="heros" />
            </div>
                <div className="hero-text">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
          
       
        </>
    )
}