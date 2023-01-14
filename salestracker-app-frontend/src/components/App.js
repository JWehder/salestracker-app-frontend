import React, { useState } from "react";
import CustomerTable from './CustomerTable';
import CloseButton from 'react-bootstrap/CloseButton';
import InfoCard from "./InfoCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CustomerForm from "./CustomerForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CustomerProvider } from "../context/customerContext"
import { SalesProvider } from "../context/salesContext";
import EditForm from "./EditForm";


function App() {
  const [changeButton, setChangeButton] = useState(false)
  const [displayedForm, setDisplayedForm] = useState("Make Changes")

  function handleChangeButtonClick(e) {
    setDisplayedForm(e.target.value)
    setChangeButton(!changeButton)
  }

  function handleCloseButtonClick() {
    setChangeButton(!changeButton)
    setDisplayedForm("Make Changes")
  } 

  return (
    <CustomerProvider>
    <SalesProvider>
    <div className="App">
      <div className="webpageHeader">
            <h1>Sales Alignments</h1>
            <hr></hr>
      </div>
      <div>

        {
          changeButton ?
          <CloseButton onClick={handleCloseButtonClick}/>
          :
          <DropdownButton id="dropdown-item-button" title="Make Changes">
            <Dropdown.ItemText>Make Changes to the Database</Dropdown.ItemText>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Create Customer"}>Create Customer</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Edit Customer"}>Edit Customer</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Delete Customer"}>Delete Customer</Dropdown.Item>
          </DropdownButton>
          }
          
      </div>
      <div>
        {displayedForm === "Create Customer" ? <><hr></hr> <CustomerForm /></> : ""}
        {displayedForm === "Edit Customer" ? <><hr></hr> <EditForm /></> : ""}
        {displayedForm === "Del Customer" ? <><hr></hr> <EditForm /></> : ""}
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
        <CustomerTable />
      </div>
    </div>
    </SalesProvider>
    </CustomerProvider>
  );
}

export default App;
