import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import React, { useState } from 'react';

export default function Home() {
    const [isLoading, setLoading] = useState(false);
    const handleClick = () => setLoading(true);

    if (isLoading) {
        return (<Redirect to={{ pathname: "/applyEpass" }} />);
    }

    return (
        <div className="center" >
            <Card className="text-center" style={{ width: '25rem' }}>
                <Card.Header>EPass</Card.Header>
                <Card.Body>
                    <Card.Title>Pass to travel between cities</Card.Title>
                    <Card.Text>
                        This pass will be allowed to use only on respective days.
                </Card.Text>
                    <Button variant="primary" onClick={!isLoading ? handleClick : null}>Apply EPass</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Applied Pass : 2 days ago</Card.Footer>
            </Card>
        </div>
    );

}
