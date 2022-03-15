import React from 'react'
import { Button, Image } from 'react-bootstrap'

import illus1 from "../../Images/illustration.svg"
import arrow from "../../Images/arrow-1.svg"
import facebook from "../../Images/facebook.svg"
import instagram from "../../Images/Instagram.svg"
import linkedin from "../../Images/Linkedin.svg"

import "../../style.css"


export default function Panel1() {
  return (
    <div className="container-lp-1" id="home">

        <div className='sidePanel' style={{alignItems:"center"}}>
        <Image className="illus-arrow"src={arrow}/>
        
        {/**
       * Social Media links
       */}

          <div className="social-column">
            <a href="https://www.facebook.com/rshifts"> <Image id="logo" className='hvr-float-shadow' src={facebook}/></a>
            <a href="https://www.instagram.com/reality.shifts/"> <Image id="logo" className='hvr-float-shadow'  src={instagram}/></a>
            <a href="https://www.linkedin.com/company/rshifts/"> <Image id="logo" className='hvr-float-shadow'  src={linkedin}/></a>
          
         
          </div >
        </div>
        <div className="land-text font-poppins" >
        <p id="join-line">Join the world’s most affordable</p>
        <p id="vr">VR</p>
        <p id="meta">METAVERSE</p>
        <p id="description-p1">RShifts’ <a style={{color:"#AF4BF2"}}>RWorld</a> will be world’s first authentic VR Metaverse experience for mobile phones using cutting edge machine learning techniques to provide state of the art XR experience on the <a style={{color:"#EDBA3A"}}>GO !</a></p>
        <Button href="/signup"  className="mt-5 mb-5" id="rs-button" type="primary">
              Join Us
              
          </Button>
        </div>
        <source media="(min-width:800px)" srcSet={illus1}/>
        <Image className="illus-1" src={illus1}/>

      </div>
  )
}
