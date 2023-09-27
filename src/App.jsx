import { useState } from 'react'
import './App.css'
import Experience from "./components/Experience.jsx"
import NavBar from "./components/NavBar.jsx"
import data from "../data.js"

function App() {
  const [count, setCount] = useState(0)
  const experiences = data.map(experience => {
      return(
        <Experience 
        key = {experience.id}
        title = {experience.title}
        location = {experience.location}
        googleMapsLink = {experience.googleMapsLink}
        startDate = {experience.startDate}
        endDate = {experience.endDate}
        description = {experience.description}
        imageURL = {experience.imageURL}
        />
      
      )
  }
  )

  return(
    <div>
      <NavBar />
      <section>
        {experiences}
      </section>
    </div>
  )
}
  

export default App



