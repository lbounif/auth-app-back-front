import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Form, Button } from 'react-bootstrap'

const Login = () => {
    //for controlling form inputs
    const { register, handleSubmit, formState: { errors } } = useForm()
    //State of Login
    const [successMessage, setSuccessMessage ] = useState(" ")
    const [errorMessage, setErrorMessage ] = useState(" ")
    const [userDetails, setUserDetails ] = useState(" ")

    const onSubmit = () => {
        //API call to login user
    }
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