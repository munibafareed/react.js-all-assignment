import React from "react";
import { useState } from "react";
import OffBulb from "../images/bulb-off..png"
import OnBulb from "../images/bulb-on.png"
import "./bulb.css"
const img = document.getElementById("img")

const Bulb = () => {

    
    const [bulb, setBulb] = useState(OffBulb)

    const [onOffText, btnText] = useState("ON")
    const toggleBulbBtn = (e) => {
       
        if (bulb == OffBulb) {
            setBulb(OnBulb)
            btnText("OFF")
        } else {
            setBulb(OffBulb)
            btnText("ON")
        }
    }
   



    const [lightMode, setMode] = useState({
        color: "black",
        backgroundColor: "white",
    })

    
    return (
        <div className="BulbDiv" style={lightMode}>

             <header style={lightMode}>
                <h1 style={lightMode}> Bulb ON And OFF</h1>
            </header> 
            <section style={lightMode}>
                <img id="img" src={bulb} width="200px" alt="" />
                 <button style={lightMode} onClick={() => toggleBulbBtn("ab")}>{onOffText}</button>
            </section>
           
        </div> 

    )
}
export default Bulb