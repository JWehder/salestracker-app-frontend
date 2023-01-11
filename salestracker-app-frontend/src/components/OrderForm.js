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
    const [inputBoxes, setInputBoxes] = 

    function handleAdd(e) {
        setNumberOfProducts(numberOfProducts + 1)
        // e.currentTarget.parentNode.parentNode.parentNode.childNodes
    }

    function handleRemove(e) {
        console.log(e.currentTarget.parentNode.parentNode.parentNode.key)
        setNumberOfProducts(numberOfProducts - 1)
    }

    const productsToDisplay = Array(numberOfProducts).fill().map((value, i) => {
        return ( 
                <div className="cart" key={i}>
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
                        <Button onClick= {handleAdd} variant="primary">Add +</Button>
                        {numberOfProducts === 1 ? <Button variant="danger" disabled >Remove</Button> : <Button onClick= {handleRemove} variant="danger" >Remove</Button>}
                        </InputGroup>
                    </Row>
                </div>
        )
    })

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Salesperson</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>
            </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                {productsToDisplay}
            </Row>

            <Button variant= "success" type="submit" className="mb-2">
                    Submit Order
            </Button>
        </Form>
  );
}

export default OrderForm;