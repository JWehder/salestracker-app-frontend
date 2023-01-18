import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";
import ProgressBar from 'react-bootstrap/ProgressBar';

function InfoCard() {
    const { rev_total } = useContext(CustomerContext)
    const { quota_total, currentSalesperson } = useContext(SalesContext)

    const percentageOfQuota = () => {
        return Math.round((rev_total / quota_total) * 100)
    }

    const textData = () => {
        if (currentSalesperson.first_name === "") {
            return `The sales team as a whole has accumulated $${rev_total} on a $${quota_total} quota. The sales team has attained ${percentageOfQuota()}% of their quota.`
        } else {
            return `${currentSalesperson.first_name} ${currentSalesperson.last_name} has accumulated $${rev_total} revenue on a $${quota_total} quota. ${currentSalesperson.first_name} has attained ${percentageOfQuota()}% of their quota.`
        }
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
                <Card
                bg={'Light'.toLowerCase()}
                style={{ width: '18rem' }}
                >
                    <Card.Header>Quota vs. Revenue</Card.Header>
                    <Card.Body>
                        <Card.Title> Revenue: {rev_total} </Card.Title>
                        <Card.Title> Quota: {quota_total} </Card.Title>
                        <Card.Text>
                        {textData()}
                        </Card.Text>
                        {progressBar()}
                    </Card.Body>
                </Card>
    )
}

export default InfoCard;