import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { InputGroup } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";

function OrderForm() {
    const [numberOfProducts, setNumberOfProducts] = useState(1)
    const [removeButton, setRemoveButton] = useState(false)

    function handleAddClick() {
        setRemoveButton(!removeButton)
        setNumberOfProducts(numberOfProducts + 1)
    }

    function handleDeleteClick(e) {
        console.log(e)
    }


    const productsToDisplay = Array(numberOfProducts).fill().map(() => {
        return ( 
                <Row className="mb-3">
                    <InputGroup as= {Col} >
                    <DropdownButton
                    variant="primary"
                    title="Pick a Nut"
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Nut</Dropdown.Item>
                    <Dropdown.Item>Separated link</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control
                    placeholder="Quantity"
                    type="Number"
                    />
                    <Button onClick= {handleAddClick} variant="primary">Add +</Button>
                    {removeButton ? <Button onClick= {handleDeleteClick} variant="danger">Remove</Button> : ""}
                    </InputGroup>
                </Row>
        )
    })

    return (
        <Form>
            <Row className="mb-3">
                <Form.Label>Salesperson First & Last Name</Form.Label>
                <Form.Group as={Col}>
                <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group as= {Col}>
                <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
            </Row>
                {productsToDisplay}
            <Button variant= "success" type="submit" className="mb-2">
                    Submit Order
            </Button>
        </Form>
  );
}

export default OrderForm;