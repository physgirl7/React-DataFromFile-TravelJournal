import React from "react";
import Fill220 from "../assets/Fill220.svg"

export default function Experience(props){
    return(
        <div className = "experience-main">
            <div>
                <img  className = "experience-image" src = {`../../${props.imageURL}`} />
            </div>
            <div className = "experience-contentcolumn">
                <div className = "experience-topline">
                    <img className = "experience-locationimg" src = {Fill220} />
                    <h3 className = "experience-location">{props.location}</h3>
                    <a className = "experience-googlelink" href = {props.googleMapsLink}>View on Google Maps</a>
                </div>
                <div>
                    <h2 className = "experience-title">{props.title}</h2>
                </div>
                <div>
                    <h4 className = "experience-dates">{`${props.startDate} - ${props.endDate}`}</h4>
                </div>
                    <p className = "experience-description">{props.description}</p>
                <div>

                </div>
            </div>
        </div>
   
    )
}


     // <div>
            {/* <div>
                <img src = {`../assets/${props.imageURL}`} />
            </div>
            <div>
                <img src ="../assets/Fill220.svg" />
                <h3>{props.location}</h3>
                <a href = {props.googleMapsLink} />
            </div> */}

// </div>