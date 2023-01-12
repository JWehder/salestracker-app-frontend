import React, { useState } from "react";
import OrderForm from './OrderForm';
import Button from 'react-bootstrap/Button';
import OrderTable from './OrderTable';
import CloseButton from 'react-bootstrap/CloseButton';
import InfoCard from "./InfoCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App() {
  const [formIsActive, setFormActive] = useState(false)

  return (
    <div className="App">
      <div className="webpageHeader">
            <h1>Sales Alignments</h1>
            <hr></hr>
      </div>
      <div className="top-buttons">
        <Button onClick={() => setFormActive(!formIsActive)} variant="primary">{formIsActive ? <CloseButton /> : "Customer +"}</Button>
        
      </div>
      <div>
        
        {formIsActive ? <><hr></hr> <OrderForm /></> : ""}
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
