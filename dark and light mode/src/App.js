
import React, { useState } from "react";
import "./styles.css";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <h1>ZARLISH TEHSEEN ALI</h1>
    <h2>PERSONAL INFORMATION</h2>
    <h3>Father Name : Tehseen Ali</h3>
    <h3>Date of Birth : 15/1/2001</h3>
    <h3>Nationality : Pakistani</h3>
    <h3>Domicila /PRC : Karachi-Sindh</h3>
    <h3>Gender : Female</h3>
    <h3>Marital Status : Single</h3>
    <h2>QUALIFICATION</h2>
<h3>Martriculation in commerce group from karachi boad</h3>

    <h2>CERTIFICATION</h2>
<h3>Microsoft office</h3>
<h3>Basic life support (bls)</h3>
<h3>Roadmap to moderm science workshop</h3>
<h3>English lauguage</h3>
<h3>Web And Mobile  Development</h3>
<h3>other skill</h3>








        
      </div>
    </div>
  );
}
 