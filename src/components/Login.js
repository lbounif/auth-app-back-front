import { useState } from 'react'
import {Form, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <Form className="input-form">
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn">
                Suivant
            </Button>
        </Form>
    )
}

export default Login