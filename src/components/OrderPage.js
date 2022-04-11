import axios from 'axios';
import React from 'react'
import { Card, Form, Image, Button, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


const formStyle={ height: "45px", width: "300px" };
export default function OrderPage() {
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post('https://rshifts-backend.herokuapp.com/order', {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      city: e.target.city.value,
      country: e.target.country.value,
      state: e.target.state.value,
      postalCode: e.target.postalCode.value,
      address: e.target.address.value,
      phoneNumber: e.target.phoneNumber.value
    }).then((res) => {
      console.log(res)
      if(res.data === "SAVED"){
        alert("Hurray!! We have recieved your order.....🔥🔥");
        history.push("/")
      }else{
        alert("Order failed to recieve...🥺🙁")
      }
    })
  }
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="  font-poppins w-100" style={{ maxWidth: '800px' }} >
        <div className="text-center">
          <a href="/">

            <Image src="/logogroup.png" />
          </a>
        </div>
        <Card className="shadow p-3 mb-5 bg-white align-items-center justify-content-center " style={{ borderRadius: "20px" }}>
          <Card.Body>
            <h2 className="text-center mb-4 " style={{ fontSize: '22px', fontWeight: 'bold' }}>Order Details</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group id="firstName" className="mb-4"   >

                    <Form.Control type="Name" name="firstName" placeholder="First Name" style={formStyle} required />
                  </Form.Group>
                  <Form.Group id="lastName" className="mb-4" >

                    <Form.Control type="Name" name="lastName" style={formStyle} placeholder="Last Name" required />
                  </Form.Group>
                  <Form.Group id="address" className="mb-4" >

                    <Form.Control type="Address" name="address" style={formStyle} placeholder="Address" required />
                  </Form.Group>
                  <Form.Group id="postalCode" className="mb-4" >

                    <Form.Control type="number" name="postalCode" style={formStyle} placeholder="Postal Code" required />
                  </Form.Group></Col>
                <Col>
                  <Form.Group id="phoneNumber" className="mb-4 " >

                    <Form.Control type="text" name="phoneNumber" style={formStyle} placeholder="Phonenumber with code" required />
                  </Form.Group>
                  <Form.Group id="city" className="mb-4" >

                    <Form.Control type="Name" name="city" style={formStyle} placeholder="City" required />
                  </Form.Group>
                  <Form.Group id="Country" className="mb-4" >
                  <Form.Control type="Name" name="country" style={{ height: "45px", width: "300px" }} placeholder="Country" required />
                  </Form.Group>
                  <Form.Group id="State" className="mb-4" >

                    <Form.Control type="Name" name="state" style={{ height: "45px", width: "300px" }} placeholder="State" required />
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center ">
                <Button className="px-3" id="rs-button" type="submit">
                  ORDER NOW
                </Button>
              </div>

            </Form>
            
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <a href="/dashboard ">Back</a>
        </div>
      </div>
    </div>
  )

  }
