import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function OrderForm() {
    const [numberOfProducts, setNumberOfProducts] = useState([1])

    function handleAdd() {
        setNumberOfProducts(numberOfProducts.push(1))
        console.log(numberOfProducts)
    }

    const productsToDisplay = numberOfProducts.map(() => {
        return ( 

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