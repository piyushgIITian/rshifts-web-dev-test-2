import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import "../../style.css"


import goggles from "../../Images/land-goggles.svg"
import metaverse from "../../Images/metaverse.svg"
import hands from "../../Images/hands.svg"
import money from "../../Images/money.svg"
import planet2 from "../../Images/planet-2.svg"
import planet3 from "../../Images/planet-3.svg"


export default function Panel2() {
  return (
    <div className="d-flex justify-content-center align-items-center features">
        <Row id="panel-2-row">
          
            <Col className="justify-content-center align-items-center"style={{position:"relative"}}>
              <Card id="land-card">
                <Card.Img className="land-images" variant="top" src={goggles} loading="lazy" />
                <Card.Body>
                  
                  <Card.Text id="rs-2-text" >
                  Experience the world through Mobile VR.
                                    </Card.Text>
                </Card.Body>
              </Card>
              <Card id="land-card" style={{zIndex:"1"}} >
                <Card.Img className="land-images" variant="top" src={metaverse} loading="lazy" />
                <Card.Body>
                  
                  <Card.Text id="rs-2-text">
                  Join our F2P <br/> VR Metaverse- RWorld
                  </Card.Text>
                </Card.Body>
              </Card>
              <Image className="planet-2" src={planet2}/>
            </Col>
            <Col>
            <Image className="planet-3" src={planet3}/>
              <Card id="land-card" >
                <Card.Img className="land-images" variant="top" src={hands} loading="lazy"/>
                <Card.Body>
                  
                  <Card.Text id="rs-2-text">
                    Use your Hands as positional trackers
                  </Card.Text>
                </Card.Body>
              </Card>
              
              <Card id="land-card">
                <Card.Img className="land-images" variant="top" src={money} loading="lazy"/>
                <Card.Body>
                  
                  <Card.Text id="rs-2-text">
                    Making virtual meetings and tours easier.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
         
        </Row>

        </div>
  )
}
