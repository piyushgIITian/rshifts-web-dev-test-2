import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Image } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()

  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div>
      <div className="text-center">
        <Image src="/logogroup.png"/ >
      </div>
      <Card className="shadow p-3 mb-5 bg-white" style={{borderRadius: "20px"}}>
        <Card.Body style={{borderRadius: "20px"}}>
          <h2 className="text-center mb-4" style={{fontSize: '22px', fontWeight: 'bold'}}>Get your free RGear !</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>

            <Form.Group id="email" className="mb-4" >
              
              <Form.Control type="email" style={{height: "45px"}} placeholder = "Email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="password" style={{height: "45px"}} placeholder = "Password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm" className="mb-4" >
              
              <Form.Control type="password" style={{height: "45px"}} placeholder = "Confirm Password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div className="text-center ">
            <Button disabled={loading} className="px-3" id="rs-button" type="submit">
              Sign Up
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}
