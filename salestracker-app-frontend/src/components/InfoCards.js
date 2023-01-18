import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ProgressBar from 'react-bootstrap/ProgressBar';

function InfoCard() {
    const { rev_total } = useContext(CustomerContext)
    const { quota_total, currentSalesperson } = useContext(SalesContext)

    const percentageOfQuota = () => {
        return Math.round((rev_total / quota_total) * 100)
    }

    const progressBar = () => {
        if (percentageOfQuota() > 100) {
            return <ProgressBar striped variant="success" now={percentageOfQuota()} label={`${percentageOfQuota()}%`} />
        } else if (percentageOfQuota() > 60 && percentageOfQuota() < 100) {
            return <ProgressBar striped variant="warning" now={percentageOfQuota()} label={`${percentageOfQuota()}%`} />
        } else {
            return <ProgressBar striped variant="danger" now={percentageOfQuota()} label={`${percentageOfQuota()}%`} />
        }
    }

    return (
            <div style={{ textAlign: 'center' }} >
                <Card
                bg={'Light'.toLowerCase()}
                style={{ width: '18rem' }}
                className="text-center"
                >
                    <Card.Header>Quota vs. Revenue</Card.Header>
                    <Card.Body>
                        <Card.Title> Revenue: {rev_total} </Card.Title>
                        <Card.Title> Quota: {quota_total} </Card.Title>
                        <Card.Text>
                        {
                            currentSalesperson.quota !== 0 ?
                            `${currentSalesperson.first_name} ${currentSalesperson.last_name} has accumulated $${rev_total} revenue on a $${quota_total} quota. ${currentSalesperson.first_name} has attained ${percentageOfQuota()}% of their quota`
                            :
                            `The sales team has accumulated ${rev_total} on a ${quota_total} quota`
                        }
                        </Card.Text>
                        {progressBar()}
                    </Card.Body>
                </Card>
            </div>
    )
}

export default InfoCard;