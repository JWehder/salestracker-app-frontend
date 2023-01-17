import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function InfoCard() {
    const { rev_total } = useContext(CustomerContext)
    const { quota_total, currentSalesperson } = useContext(SalesContext)

    return (
        <Row xs={1} md={2} className="g-4" style={{"text-align": "center"}}>
            <Col>
                <Card
                bg={'Light'.toLowerCase()}
                key={'Light'}
                text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
                >
                <Card.Header>Quota vs. Revenue</Card.Header>
                <Card.Body>
                    <Card.Title> Revenue: {rev_total} </Card.Title>
                    <Card.Title> Quota: {quota_total} </Card.Title>
                    <Card.Text>
                    {
                        currentSalesperson.quota !== 0 ?
                        `${currentSalesperson.first_name} ${currentSalesperson.last_name} has accumulated ${rev_total} on a ${quota_total} quota.`
                        :
                        `The sales team has accumulated ${rev_total} on a ${quota_total} quota`
                    }
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card
                bg={'Light'.toLowerCase()}
                key={'Light'}
                text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
                >
                <Card.Header>Data Name</Card.Header>
                <Card.Body>
                    <Card.Title>{'Light'} Data Name </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default InfoCard;