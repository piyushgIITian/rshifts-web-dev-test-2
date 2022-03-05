import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import "../../style.css"


import goggles from "../../Images/land-goggles.svg"
import cirImg from "../../Images/360img.svg"
import vidGame from "../../Images/vidGame.svg"
import money from "../../Images/money.svg"
import planet2 from "../../Images/planet-2.svg"
import planet3 from "../../Images/planet-3.svg"


export default function Panel2() {
  return (
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
  )
}
