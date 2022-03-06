import React from 'react'
import { Navbar, Nav, Button} from "react-bootstrap"
import {Link} from 'react-scroll'
import "../style.css"
import "../Css/button-anim.css"
export default function Header(props) {
  return (
    <div className='header'>
        <Navbar bg="light" expand="lg" className="py-3  bg-white  " style={{boxShadow: "0px 6px 5px 2px rgba(0, 0, 0, 0.05)", marginBottom:"23px"}}>
            
                <Navbar.Brand href="/" className="font-tomorrow" style={{marginLeft:"6vw", fontWeight:"bold"}}><img
          alt=""
          src="/rsLogo.svg"
          width="50"
          height="50"
          style={{marginRight: "9px"}}
          className="d-inline-block"
        />RShifts</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{marginRight:"101px"}}>
                <Nav>
                    <Nav.Link href="/" id="header-tabs" className="hover-underline-animation"><Link activeClass="active" to="home" spy={true} smooth={true}>HOME</Link></Nav.Link>
                    <Nav.Link href="#about-us" id="header-tabs" className="hover-underline-animation"><Link  to="about-us" spy={true} smooth={true}>ABOUT US</Link></Nav.Link>
                    <Nav.Link href="/contact-us" id="header-tabs" className="hover-underline-animation">CONTACT US</Nav.Link>
                    <Button onClick={()=>props.buttonFunc()} href={props.link} className="btn10 px-3" id="rs-button-1" type="submit">
                    <div className="transition"></div>
                       {props.buttonText}
                    </Button>
                    
                </Nav>
                </Navbar.Collapse>
                 
           
        </Navbar>
    </div>
  )
}
