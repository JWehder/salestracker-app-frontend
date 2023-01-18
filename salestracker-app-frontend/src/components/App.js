import React, { useState, useContext } from "react";
import CustomerTable from './CustomerTable';
import CloseButton from 'react-bootstrap/CloseButton';
import InfoCards from "./InfoCards";
import CustomerForm from "./CustomerForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CustomerContext, CustomerProvider } from "../context/customerContext"
import { SalesProvider } from "../context/salesContext";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm"
import CreateSalesForm from "./CreateSalesForm";


function App() {
  const { setCustomer } = useContext(CustomerContext)

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

    <div className="App">
      <div className="webpageHeader">
            <h1>Sales Tracker</h1>
            <hr></hr>
      </div>
      <div>

        {
          changeButton ?
          <CloseButton onClick={handleCloseButtonClick}/>
          :
          <DropdownButton id="dropdown-item-button" title="Make Changes">
            <Dropdown.ItemText>Make Changes to the Database</Dropdown.ItemText>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Create Customer"}>Create Customer</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Edit Customer"}>Edit Customer</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Delete Customer"}>Delete Customer</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleChangeButtonClick} value={"Create Salesperson"}>Create Salesperson</Dropdown.Item>
          </DropdownButton>
          }
          
      </div>
      <div>
        {displayedForm === "Create Customer" ? <><hr></hr> <CustomerForm /></> : ""}
        {displayedForm === "Edit Customer" ? <><hr></hr> <EditForm /></> : ""}
        {displayedForm === "Delete Customer" ? <><hr></hr> <DeleteForm /></> : ""}
        {displayedForm === "Create Salesperson" ? <><hr></hr> <CreateSalesForm /></> : ""}
        <hr></hr>
      </div>
      <div className="text-center">
        <InfoCards />
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
