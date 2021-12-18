
import { Form, Button } from 'react-bootstrap'
const FirstStep = ({user}) => {
    return (
        <Form className="input-form">
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="lastName" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn">
                Suivant
            </Button>
        </Form>
    )
}

export default FirstStep
