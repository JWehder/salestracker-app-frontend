import './App.css';
import React, { useState } from "react";

function App() {
  const [revenue, setRevenue] = useState()
  const [margin, setMargin] = useState()

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
