import './App.css';
import React, { useState } from "react";

function App() {
  const [formIsActive, setFormActive] = useState(false)

  return (
    <div className="App">
      <div className="webpageHeader">
            <h1>Sales Tracker</h1>
            <hr></hr>
      </div>
    </div>
  );
}

export default App;
