import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from "../contexts/AuthContext"
import { Button, Image } from 'react-bootstrap'
import "../style.css"


import illus1 from "../Images/illustration.svg"
import arrow from "../Images/arrow-1.svg"
import facebook from "../Images/facebook.svg"
import instagram from "../Images/Instagram.svg"
import linkedin from "../Images/Linkedin.svg"

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

        <div style={{alignItems:"center"}}>
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
        <Button href="/login"  className="mt-5" id="rs-button" type="primary">
              Join Us
          </Button>
        </div>

        <Image className="illus-1" src={illus1}/>
        

      </div>
      <Footer/>
    </div>
  )
}
        

