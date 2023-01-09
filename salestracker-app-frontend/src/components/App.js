import './App.css';
import React, { useState } from "react";
import OrderForm from './OrderForm';

function App() {
  const [formIsActive, setFormActive] = useState(false)

  return (
    <div className="App">
      <div className="webpageHeader">
            <h1>Sales Tracker</h1>
            <hr></hr>
      </div>
      <div>
        {formIsActive ? <OrderForm /> : ""}
      </div>
      
    </div>
  );
}

export default App;
