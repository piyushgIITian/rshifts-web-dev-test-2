import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from "../contexts/AuthContext"
import { Button, Image, Col, Row, Card } from 'react-bootstrap'
import "../style.css"


import illus1 from "../Images/illustration.svg"
import arrow from "../Images/arrow-1.svg"
import facebook from "../Images/facebook.svg"
import instagram from "../Images/Instagram.svg"
import linkedin from "../Images/Linkedin.svg"
import goggles from "../Images/land-goggles.svg"
import cirImg from "../Images/360img.svg"
import vidGame from "../Images/vidGame.svg"
import money from "../Images/money.svg"
import planet2 from "../Images/planet-2.svg"
import planet3 from "../Images/planet-3.svg"

export default function LandingPage() {
  var headerText = "SIGN IN"
  const { currentUser} = useAuth()

  if(currentUser){
    headerText="SIGN OUT"
  }
  else{
    headerText="SIGN IN"
  }
  console.log(currentUser)
  return (
    <div style={{background:"white"}}>
      <Header buttonText={headerText} link={"/login"}/>
      <div className="container-lp-1">

        <div className='sidePanel' style={{alignItems:"center"}}>
        <Image className="illus-arrow"src={arrow}/>
        
        {/**
       * Social Media links
       */}

          <div className="social-column">
          <Image id="logo" src={facebook}/>
          <Image id="logo" src={instagram}/>
          <Image id="logo" src={linkedin}/>

          </div >
        </div>
        <div className="land-text font-poppins" >
        <p id="join-line">Join the world’s most affordable</p>
        <p id="vr">VR</p>
        <p id="meta">METAVERSE</p>
        <p>Rshifts is an interactive smartphone XR solution using cutting edge computer vision techniques to provide state of the art XR experiences on the go.</p>
        <Button href="/login"  className="mt-5 mb-5" id="rs-button" type="primary">
              Join Us
          </Button>
        </div>
        <source media="(min-width:800px)" srcSet={illus1}/>
        <Image className="illus-1" src={illus1}/>

      </div>
        <div className="d-flex justify-content-center align-items-center features">
        <Row>
          
            <Col style={{position:"relative"}}>
              <Card id="land-card">
                <Card.Img className="land-images" variant="top" src={goggles} />
                <Card.Body>
                  
                  <Card.Text id="rs-2-text" >
                    Experience the new world through VR
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="land-card" style={{zIndex:"1"}} >
                <Card.Img className="land-images" variant="top" src={cirImg} />
                <Card.Body>
                  
                  <Card.Text id="rs-2-text">
                    View all surroundings with 360<span>&#176;</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Image className="planet-2" src={planet2}/>
            </Col>
            <Col>
            <Image className="planet-3" src={planet3}/>
              <Card id="land-card" >
                <Card.Img className="land-images" variant="top" src={vidGame} />
                <Card.Body>
                  
                  <Card.Text id="rs-2-text">
                    Incredible gaming experience
                  </Card.Text>
                </Card.Body>
              </Card>
              
              <Card id="land-card">
                <Card.Img className="land-images" variant="top" src={money} />
                <Card.Body>
                  
                  <Card.Text id="rs-2-text">
                    Making meetings and tours easier
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
         
        </Row>

        </div>
      <Footer/>
    </div>
  )
}
        

