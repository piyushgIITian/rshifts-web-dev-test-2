import React, { useRef } from 'react'
import { Card, Form, Image,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function OrderPage() {
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const addressRef = useRef()
    const postalcodeRef = useRef()
    const cityRef = useRef()
    const countryRef = useRef()
    const stateRef = useRef()

  return (
    <div className="font-poppins" >
      <div className="text-center">
        <a href="/">

        <Image src="/logogroup.png"/ >
        </a>
      </div>
      <Card className="shadow p-3 mb-5 bg-white " style={{borderRadius: "20px"}}>
        <Card.Body>
          <h2 className="text-center mb-4 " style={{fontSize: '22px', fontWeight: 'bold'}}>Order Details</h2>
          <Form>
            <Form.Group id="email" className="mb-4"   >
              
              <Form.Control type="Name" placeholder="First Name" style={{height: "45px"}} ref={firstnameRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="Name" style={{height: "45px"}} placeholder="Last Name" ref={lastnameRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="Address" style={{height: "45px"}} placeholder="Address" ref={addressRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="postalcode" style={{height: "45px"}} placeholder="Postal Code" ref={postalcodeRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="Name" style={{height: "45px"}} placeholder="City" ref={cityRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="Name" style={{height: "45px"}} placeholder="Country" ref={countryRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4" >
              
              <Form.Control type="Name" style={{height: "45px"}} placeholder="State" ref={stateRef} required />
            </Form.Group>
            <div className="text-center ">
            <Button className="px-3" id="rs-button" type="submit">
              ORDER
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
