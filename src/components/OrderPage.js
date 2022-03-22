import React, { useRef } from 'react'
import { Card, Form, Image, Button, Row, Col } from 'react-bootstrap'
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
      <div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh" }}>
        <div className="  font-poppins w-100" style={{ maxWidth: '800px' }} >
          <div className="text-center">
            <a href="/">

              <Image src="/logogroup.png" />
            </a>
          </div>
          <Card className="shadow p-3 mb-5 bg-white align-items-center justify-content-center " style={{ borderRadius: "20px" }}>
            <Card.Body>
              <h2 className="text-center mb-4 " style={{ fontSize: '22px', fontWeight: 'bold' }}>Order Details</h2>
              <Form>
                <Row>
                  <Col>
                    <Form.Group id="email" className="mb-4"   >

                      <Form.Control type="Name" placeholder="First Name" style={{ height: "45px", width: "300px" }} ref={firstnameRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4" >

                      <Form.Control type="Name" style={{ height: "45px", width: "300px" }} placeholder="Last Name" ref={lastnameRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4" >

                      <Form.Control type="Address" style={{ height: "45px", width: "300px" }} placeholder="Address" ref={addressRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4" >

                      <Form.Control type="postalcode" style={{ height: "45px", width: "300px" }} placeholder="Postal Code" ref={postalcodeRef} required />
                    </Form.Group></Col>
                  <Col>
                    <Form.Group id="password" className="mb-4 " >

                      <Form.Control type="Name" style={{ height: "45px", width: "300px" }} placeholder="Phone Number" ref={stateRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4" >

                      <Form.Control type="Name" style={{ height: "45px", width: "300px" }} placeholder="City" ref={cityRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4" >

                      <Form.Control type="Name" style={{ height: "45px", width: "300px" }} placeholder="Country" ref={countryRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4" >

                      <Form.Control type="Name" style={{ height: "45px", width: "300px" }} placeholder="State" ref={stateRef} required />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center ">
                  <Button className="px-3" id="rs-button" type="submit">
                    ORDER NOW
                  </Button>
                </div>

              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/dashboard ">Back</Link>
          </div>
        </div>
        </div>
  )
}
