import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import AlertMessage from './AlertMessage';


export default function ApplyEPass() {
    const [state, setState] = useState({ fName: "", lName: "", fromAddress: "", toAddress: "", city: "", zip: "", noPeople: "1", proof: "PAN", states: "Choose..", userId: sessionStorage.getItem('userId') });
    const [above60, setAbove60] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [modalShow, setModalShow] = useState(false);


    function handleSubmit(event) {
        setModalShow(true);
        console.log(state);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        };
        fetch('http://localhost:3002/pass/applyEpass', requestOptions).then(
            response => response.json()).then(
                (data) => {
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                }
            )
        event.preventDefault();

        //  setRedirect(true);

    };

    const handleChange = e => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    function validateForm() {
        return (state.zip).length > 0;
    }

    if (redirect) {
        return (<Redirect to={{ pathname: "/home" }} />)
    }

    if (modalShow) {
        return (<AlertMessage show={modalShow} onClose={() => setModalShow(false)} message="Success" />);
    }
    
    return (
        <>
            <div className="ApplyEPass">
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="fName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control placeholder="First Name" required value={state.fName} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control placeholder="Last Name" value={state.lName} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="noPeople">
                            <Form.Label> No of People</Form.Label>
                            <Form.Control as="select" defaultValue="1" onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Control >
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formGridCheckbox">
                            <Form.Check type="checkbox" label="Above 60" value={above60} onChange={e => setAbove60(e.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="fromAddress">
                        <Form.Label>Address From</Form.Label>
                        <Form.Control placeholder="Current City" required value={state.fromAddress} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="toAddress">
                        <Form.Label>Address To</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor of Destination" required value={state.toAddress} onChange={handleChange} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control required value={state.city} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="states">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." onChange={handleChange}>
                                <option>Choose...</option>
                                <option>Options will be added</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required value={state.zip} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="proof">
                            <Form.Label> Identity Proof</Form.Label>
                            <Form.Control as="select" required onChange={handleChange}>
                                <option>PAN</option>
                                <option>VOTER ID</option>
                                <option>LICENSE</option>
                                <option>AADHAR CARD</option>
                                <option>PASSPORT</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="validationFormik106">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                            // onChange={}
                            //isInvalid={!!errors.terms}
                            //feedback={errors.terms}

                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" disabled={!validateForm()}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );


}
