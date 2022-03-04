import React from 'react'
import {Card, Row} from "react-bootstrap"
import "../style.css"

export default function Footer() {
  return (
    <div>
        
        <Card style={{color:"white"}}>
        <Card.Header style={{background:"#927EFB",height:"7vh"}}> </Card.Header>
        <div id="footer-body">
        <Row>
        <Card.Body id="foot-card-body">
            <Card.Title id="foot-title">Address</Card.Title>
            <Card.Text>
            HSR Layout,Bengaluru<br/> Karnataka-560102
            </Card.Text>
            
        </Card.Body>
        <Card.Body id="foot-card-body">
            <Card.Title id="foot-title">Contact Us</Card.Title>
            <Card.Text>
                9820197246<br/> piyush.gautam@rshifts.com
            </Card.Text>
            
        </Card.Body>
        <Card.Body id="foot-card-body">
            <Card.Title id="foot-title">Connect with us</Card.Title>
            <Card.Text>
                
                <a id="links" href="www.facebook.com/" >Facebook</a><br/>
                <a id="links" href="www.linkedin.com" >LinkedIn</a><br/>
                <a id="links" href="www.instagram.com" >Instagram</a><br/>
                
            </Card.Text>
            
        </Card.Body>
        </Row>
        </div>

        <Card.Footer id="footer-bot">
            <Row>
            <a id="footer-foot" href="/">
            HOME
            </a>
            <a id="footer-foot" href="/">
            ABOUT US
            </a>
            <a id="footer-foot" href="/">
            COMPANY VALUES
            </a>
            <a id="footer-foot" href="/">
            PRIVACY POLICY
            </a>
            </Row>
        </Card.Footer>
        
        </Card>
        
    </div>
  )
}

