import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom'

export default function Login() {
  const [state, setState] = useState({ id: "", pwd: "" });
  const [redirect, setRedirect] = useState(false);

  function validateForm() {
    return state.id.length > 0 && state.pwd.length > 0;
  }
  const handleChange = e => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  function handleSubmit(event) {
    sessionStorage.setItem('userId',state.id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    }
    fetch('http://localhost:3002/sign/login', requestOptions).then(
      response => response.json()).then(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    setRedirect(true);
  }
  if (redirect) {
    return (<Redirect to={{ pathname: "/home" }} />)
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="id">
          <Form.Label>Email address</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={state.id}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="pwd">
          <Form.Label>Password</Form.Label>
          <Form.Control value={state.pwd}
            onChange={handleChange}
            type="password" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Submit
                </Button>
      </Form>
    </div>
  );
}