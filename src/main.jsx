import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import './index.css'
import Data from "./data.jsx"

console.log(Data)
const datacard = Data.map((item) => {
  // id: 2,
  //       title: "Learn Wedding Photography",
  //       description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
  //       price: 125,
  //       coverImg: "wedding-photography.png",
  //       stats: {
  //           rating: 5.0,
  //           reviewCount: 30
  //       },
  //       location: "Online",
  //       openSpots: 27,
    return (
        <Card
            key={item.id}
            item = {item}
        />
    )
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Navbar />
    <Hero />
    <section className="cards-styling">
    {datacard}
    </section>
   
  </React.StrictMode>,
)
