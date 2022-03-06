import React from 'react'
import {Card, Row} from "react-bootstrap"
import "../style.css"
import {Link} from 'react-scroll'

export default function Footer() {
  return (
    <div className="footer">
        
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
                
                <a id="links" href="https://www.facebook.com/rshifts" >Facebook</a><br/>
                <a id="links" href="https://www.linkedin.com/company/rshifts/" >LinkedIn</a><br/>
                <a id="links" href="https://www.instagram.com/reality.shifts/" >Instagram</a><br/>
                
            </Card.Text>
            
        </Card.Body>
        </Row>
        </div>

        <Card.Footer id="footer-bot">
            <Row>
            <a id="footer-foot" href="#home" >
            <Link activeClass="active" to="home" spy={true} smooth={true}>
            HOME
            </Link>
            </a>
            <a id="footer-foot" href="#about-us">
            <Link to="about-us" spy={true} smooth={true}>
            ABOUT US
            </Link>
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

