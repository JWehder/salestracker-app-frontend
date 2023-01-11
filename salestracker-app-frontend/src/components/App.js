import React, { useState } from "react";
import OrderForm from './OrderForm';
import Button from 'react-bootstrap/Button';
import OrderTable from './OrderTable';
import CloseButton from 'react-bootstrap/CloseButton';
import InfoCard from "./InfoCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App() {
  const [orderFormIsActive, setFormActive] = useState(false)
  const [customerFormIsActive, setCustomerFormActive] = useState(false)

  function handleCustomerFormClick() {
    setFormActive(!orderFormIsActive)
    setCustomerFormActive(!customerFormIsActive)
  }

  return (
    <div className="App">
      <div className="webpageHeader">
            <h1>Nut Sales Tracker</h1>
            <hr></hr>
      </div>
      <Button onClick={handleCustomerFormClick} variant="primary">{customerFormIsActive ? <CloseButton /> : "Create Order +"}</Button>
      <Button onClick={() => setFormActive(!orderFormIsActive)}variant="primary">{orderFormIsActive ? <CloseButton /> : "Create Order +"}</Button>
      <div>
        
        {orderFormIsActive ? <><hr></hr> <OrderForm /></> : ""}
        <hr></hr>
      </div>
      <div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <InfoCard />
          </Col>
          <Col>
            <InfoCard />
          </Col>
          <Col>
            <InfoCard />
          </Col>
        </Row>
        <hr></hr>
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  );
}

export default App;
