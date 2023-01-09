import React, { useState } from "react";
import OrderForm from './OrderForm';
import Button from 'react-bootstrap/Button';
import OrderTable from './OrderTable';


function App() {
  const [formIsActive, setFormActive] = useState(false)

  return (
    <div className="App">
      <div className="webpageHeader">
            <h1>Nut Sales Tracker</h1>
            <hr></hr>
      </div>
      <Button onClick={() => setFormActive(!formIsActive)} variant="primary">Create Order +</Button>
      <div>
        
        {formIsActive ? <><hr></hr> <OrderForm /></> : ""}
        <hr></hr>
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  );
}

export default App;
