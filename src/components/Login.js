import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Image } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../style.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    
    
    <div className="font-poppins" >
      <div className="text-center">
        <a href="/">

        <Image src="/logogroup.png"/ >
        </a>
      </div>
      <Card className="shadow p-3 mb-5 bg-white " style={{borderRadius: "20px"}}>
        <Card.Body>
          <h2 className="text-center mb-4 " style={{fontSize: '22px', fontWeight: 'bold'}}>Sign in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-4"   >
              
              <Form.Control type="email" placeholder="Email Address" style={{height: "45px"}} ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="password" style={{height: "45px"}} placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <div className="text-center ">
            <Button disabled={loading} className="px-3" id="rs-button" type="submit">
              Log In
            </Button>
            </div>

          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      <Link to="/signup">Sign Up!!</Link> And Get your free RGear
      </div>
    </div>
    
  )
}
