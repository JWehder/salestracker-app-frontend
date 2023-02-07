import React, { useContext, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { SalesContext } from "../context/salesContext";
import { CustomerContext } from "../context/customerContext";
import Alert from 'react-bootstrap/Alert';

function FindCustomerForm() {
    const { salespeopleOptions, salespeople } = useContext(SalesContext)
    const { getSalespersonForCustomer, show, setShow } = useContext(CustomerContext)

    const [salespersonDisplayed, setSalespersonDisplayed] = useState({
        salespersonId: 0,
        salespersonFirstName: "",
        salespersonLastName: ""
    })
    const [customerNumber, setCustomerNumber] = useState(0)

    function handleSelect(id) {
        const salesperson = salespeople.find((salesperson) => salesperson.id === id)
        setSalespersonDisplayed({
            id: salesperson.id,
            firstName: salesperson.first_name,
            lastName: salesperson.last_name
        })
    }

    return(
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault()
                getSalespersonForCustomer(customerNumber, salespersonDisplayed.id)
                }}>
                <Form.Label>Search for a customer below</Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Salesperson</Form.Label>
                        <Form.Select 
                        name="salesperson_id"
                        value={`${salespersonDisplayed.id} - ${salespersonDisplayed.firstName} ${salespersonDisplayed.lastName}`}
                        onChange={(e) => handleSelect(parseInt(e.target.value))}
                        >
                            <option>Choose...</option>
                            {salespeopleOptions}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Please Enter Customer # below:</Form.Label>
                        <Form.Control name={'id'} value= {customerNumber} onChange= {(e) => setCustomerNumber(e.target.value)} placeholder="Customer number" />
                    </Form.Group>
                </Row>
                <Button variant= "primary" type="submit" className="mb-2">
                    Search
                </Button>
            </Form>
            { show ?
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                 Please make sure what you entered is valid and try again.
                </p>
              </Alert>
              :
              ""
            }
    </div>
    )

}

export default FindCustomerForm;