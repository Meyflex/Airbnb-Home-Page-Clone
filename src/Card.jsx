import React from "react"
import "./Card.css"


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Card(props) {
    console.log(props.item)
    let badgeText ;
    let bool = true;

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location == "Online") {
        badgeText = "ONLINE"
    } else {
        bool = false
    }
    return (
        <>     
        

            <div className="card">
                <div className="card-image">
                    <img className="img-card" src={`src/assets/${props.item.coverImg}`} alt="card" />
                    {bool && <p> {badgeText}</p>}
                </div>
                <div className="card-text">
                    <img className="img-star" src="src/assets/star.png" alt="star" />
                    <p> <spam className="stars"> {props.item.stats.rating} </spam>({props.item.stats.reviewCount}) • {props.item.
                    location}</p>
                </div>
                <div className="card-text-info">
                    <p> {props.item.title}</p>
                    <p><spam className="price">{props.item.price} $</spam>  / person</p>
                </div>
            </div>

         
          
       
        </>
    )
}