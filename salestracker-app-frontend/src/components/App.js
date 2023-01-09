import React, { useState } from "react";
import OrderForm from './OrderForm';
import Button from 'react-bootstrap/Button';
import OrderTable from './OrderTable';


function App() {
  const [formIsActive, setFormActive] = useState(false)

  return (
    <div className="App">
      <div className="webpageHeader">
            <h1>Sales Tracker</h1>
            <hr></hr>
      </div>
      <Button onClick={() => setFormActive(!formIsActive)} variant="primary">Primary</Button>
      <div>
        {formIsActive ? <OrderForm /> : ""}
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  );
}

export default App;
