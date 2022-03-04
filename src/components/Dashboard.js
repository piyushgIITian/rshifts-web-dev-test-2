import React, { useState } from "react"
import { Card, Alert, Container, CardGroup,Image, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style.css"

import gearicon from "../Images/gear-icon.png"
import moreInf from "../Images/more-info-icon.png"
import headGear from "../Images/head-gear-icon.png"
import helpIcon from "../Images/help-icon.png"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="background-white">
      <Header buttonFunc={handleLogout} buttonText={"Log out"}/>
      
      <div style={{ marginLeft: "113px", paddingTop: "40px"}}>
          <h3 className="mb-2 ts"><strong>Your Account</strong></h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser.email}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
      </div>
      
      <Container >
      <CardGroup  style={{marginTop:"30px", width:"100%",boxSizing:"border-box"}}>
      <Card id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={gearicon}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to 
          </Card.Text></div>
          </Row>
        </Card.Body>
      </Card>
      <Card  id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={moreInf}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title >Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to 
          </Card.Text></div>
          </Row>
        </Card.Body>
      </Card>
      </CardGroup>
      <CardGroup>
      <Card  id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={headGear}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to 
          </Card.Text></div>
          </Row>
        </Card.Body>
      </Card>
      <Card id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={helpIcon}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title >Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to 
          </Card.Text></div>
          </Row>
        </Card.Body>
      </Card>
      </CardGroup>
      </Container>

      <Footer/>
    </div>
  )
}
