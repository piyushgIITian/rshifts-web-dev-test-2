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
      <Header buttonFunc={handleLogout} buttonText={"SIGN OUT"}/>
      
      <div style={{ marginLeft: "113px", paddingTop: "40px",width:"fit-content"}}>
          <div className="youraccount">Your Account</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="currentuser">{currentUser.displayName}</div>
      </div>
     
      
      <Container >
      <CardGroup  style={{marginTop:"60px",marginBottom:"30px", width:"100%",boxSizing:"border-box"}}>
      <Card id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={gearicon}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title>Account Settings</Card.Title>
          <Card.Text>
          Change account username and password
          </Card.Text></div>
          </Row>
          <a href="/update-profile" class="stretched-link"></a>
        </Card.Body>
      </Card>
      
      <Card  id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={moreInf}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title >Digital content and devices.</Card.Title>
          <Card.Text>
          More info about the technology and Rworld.. 
          </Card.Text></div>
          </Row>
          <a href="/" class="stretched-link"></a>
        </Card.Body>
      </Card>
    
      </CardGroup>
      <CardGroup style={{marginBottom:"60px"}}>
      <Card  id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={headGear}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title >Order RGear</Card.Title>
          <Card.Text>
            Fill order details to get the latest RGear Vr <br/>headset for free.
          </Card.Text></div>
          </Row>
          <a href="/order" class="stretched-link"></a>
        </Card.Body>
      </Card>
      <Card id="dashboard-card">
        <Card.Body>
          <Row>
          <Image className="dash-images" src={helpIcon}/ ><div style={{marginLeft:"5px"}}>
          <Card.Title >Help</Card.Title>
          <Card.Text>
          Contact our team to resolve any issue <br/>regarding Rgear and the app. 
          </Card.Text></div>
          </Row>
          <a href="/contact-us" class="stretched-link"></a>
        </Card.Body>
      </Card>
      </CardGroup>
      </Container>

      <Footer/>
    </div>
  )
}
