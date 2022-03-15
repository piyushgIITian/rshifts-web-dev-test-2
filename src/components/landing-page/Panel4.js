import React from 'react'
import { Card, Image } from 'react-bootstrap'
import "../../Css/panel4.css"

import eyeGuy from "../../Images/eye-guy.svg"
import one from "../../Images/1.svg"
import two from "../../Images/2.svg"
import three from "../../Images/p3-mod.svg"
import planet1 from "../../Images/planet-1.svg"
import planet3 from "../../Images/planet-3.svg"
import rightArrow from "../../Images/right-arrow.svg"
import upArrow from "../../Images/up-arrow.svg"

export default function Panel4() {
  return (
    <div className="panel-4">
        <Image className="eyeguy"src={eyeGuy}/>

        <div className='p-col'>
            <div className='p-row'>
               
                <Card id="p4-card" className="p3-card-1">
                    
                    <Card.Body>
                
                    <Card.Text className="p4-card-text">
                    Register at RShifts to get the latest Updates !!
                    </Card.Text>
                    </Card.Body>
                    
                <Image src={one} style={{zIndex:"10",position:"absolute",
            top:"60%",
            left:"5%",padding:"0px"}}/>
                </Card>
                
            <Card id="p4-card" className="p3-card-1">
                
                <Card.Body>
            
                <Card.Text className="p4-card-text">
                Fill the form in dashboard to get in line for the latest RGear
                </Card.Text>
                </Card.Body>
                
            <Image src={upArrow} style={{zIndex:"10",position:"absolute",
            top:"85%",
            left:"45%",margin:"0px"}}/>
            <Image src={two} style={{zIndex:"10",position:"absolute",
            top:"60%",
            left:"5%",margin:"0px"}}/>
            </Card>
            <div style={{position:"relative"}}>
            <Card id="p4-card" className="p3-card-1" >
                
                <Card.Body >
            
                <Card.Text className="p4-card-text"> 
                You will be the first to get the RGear
                </Card.Text>
                </Card.Body>
                <Image src={three} style={{zIndex:"10",position:"absolute",
                top:"60%",
                left:"5%",margin:"0px"}}/>

            </Card>
                <Image src={planet1} style={{position:"absolute",
            top:"-13%",
            right:"0%",margin:"0px"}}/>
            </div>
            </div>
            <div className='p-row'>
            <div style={{position:"relative"}}>
            <Card id="p4-card" className="p3-card-1">
                
                <Card.Body>
            
                <Card.Text className="p4-card-text">
                Already have a VR?
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Image src={rightArrow} style={{position:"absolute",
            top:"40%",
            right:"-12%",margin:"0px"}}/>
            <Image src={planet3} style={{position:"absolute",
            top:"50%",
            left:"0%",margin:"0px"}}/>
           
            </div>
            <Card id="p4-card" className="p3-card-1">
                
                <Card.Body>
            
                <Card.Text className="p4-card-text">
                Wait for the big launch of RWORLD metaverse for mobile
                </Card.Text>
                </Card.Body>
                
            </Card>
            
            </div>
        </div>
    </div>
  )
}
