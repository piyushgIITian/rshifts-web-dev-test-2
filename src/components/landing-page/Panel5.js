import React from 'react'
import { Card, Image } from 'react-bootstrap'
import "../../style.css"

import sudeep from "../../Images/sudeep.png"
import prakhar from "../../Images/prakhar.png"
import piyush from "../../Images/piyush.png"
import facebook from "../../Images/f-facebook.svg"
import twitter from "../../Images/f-twitter.svg"
import linkedin from "../../Images/f-linkedin.svg"


export default function Panel5() {
  return (
    <div className='panel-5' style={{position:"relative"}}>
        <div className="panel-3 ">
        <div className="p3-cards d-flex justify-content-center align-items-center ">

        <div className='extendedCard p4-card-1'>
        <Card id="p3-card" >
            
            <Card.Body className="p-0">
           
            <Image src={sudeep}/>
            </Card.Body>
            
        </Card>
            <div className="founder-name">Sudeep Sharma</div>
            <div className="founder-title">CEO</div>
            <div className="founder-social-icons">
                <Image className="founder-social-icon" src={facebook}/>
                <Image className="founder-social-icon" src={twitter}/>
                <Image className="founder-social-icon" src={linkedin}/>
            </div>
        </div>
        <div className="extendedCard p4-card-2">
        <Card id="p3-card" >
            
            <Card.Body className="p-0">
           
            <Image src={prakhar}/>
            </Card.Body>
        </Card>
            <div className="founder-name">Prakhar Srivastava</div>
            <div className="founder-title">CTO</div>
            <div className="founder-social-icons" style={{marginBottom:"100px"}}>
                <Image className="founder-social-icon" src={facebook}/>
                <Image className="founder-social-icon" src={twitter}/>
                <Image className="founder-social-icon" src={linkedin}/>
            </div>
        </div>
        <div className="extendedCard p4-card-1">
            <Card id="p3-card" >
                
                <Card.Body className="p-0" >
                <Image src={piyush}/>
                </Card.Body>
                
            </Card>
            <div className="founder-name">Piyush Gautam</div>
            <div className="founder-title piyushgautam">COO</div>
            <div className="founder-social-icons">
                <Image className="founder-social-icon" src={facebook}/>
                <Image className="founder-social-icon" src={twitter}/>
                <Image className="founder-social-icon" src={linkedin}/>
            </div>

        </div>
        
        </div>
    </div>
    </div>
  )
}
