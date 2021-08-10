import { Form, Button, Container } from 'react-bootstrap';
export default function ContactUs() {
    return <Container className="mt-5 mb-5 p-5 border border-dark" >
        <h1>Contact Us</h1>
        <Form netlify>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingTextarea2">
            <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>;
}