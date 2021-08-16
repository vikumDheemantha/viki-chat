import React from 'react'
import { Card, Button, Form } from "react-bootstrap";
import '../css/login.css'

export default function Login() {
    return (
        <div className="login-card">
            <Card>
                <Card.Body>
                    <Card.Title className="text-center"> <i class="fas fa-sign-in-alt"></i> Card Title</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="login-btn">
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
