import React,{ useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import {Link} from 'react-router-dom'

function ForgotPassword() {
    const emailRef = useRef();
    //const nameRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            setMessage('');
          setError("");
          setLoading(true);
          await resetPassword(emailRef.current.value);
            setMessage('Check you inbox for further instructions.')
        } catch {
          setError("Failed to reset password");
        }
        setLoading(false);
      }
    return (
        <Card id="login-card" className="w-100">
        <Card.Body className="text-white">
          <h2 className="pb-3">Password Reset</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="pb-3 d-flex flex-column justify-content-start align-items-start"
              id="email"
            >
              <Form.Label className="text-white text-white">Enter Email Address</Form.Label>
              <Form.Control
                id="login-card"

                className="text-white"
                type="email"
                ref={emailRef}
              ></Form.Control>
            </Form.Group>

            <Button disabled={loading} className="w-100 mb-2" type="submit">
              Reset Password
            </Button>
          </Form> 
          <div className="w-100 text-center mt-3">
          <Link to="/auth/signin"> Sign in</Link>
        </div>
        </Card.Body>
        <div className="w-100 text-center mb-4">
          Need an account? <Link to="/auth/signup"> Sign Up</Link>
        </div>
      </Card>
    )
}

export default ForgotPassword
