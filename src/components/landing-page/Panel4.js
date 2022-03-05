import React from 'react'
import { Card, Image } from 'react-bootstrap'
import "../../style.css"

import sudeep from "../../Images/sudeep.png"
import prakhar from "../../Images/prakhar.png"
import piyush from "../../Images/piyush.png"

export default function Panel4() {
  return (
    <div className='panel-4'>
        <div className="panel-3 ">
        <div className="p3-cards d-flex justify-content-center align-items-center ">
        
        <Card id="p3-card" className="p3-card-1">
            
            <Card.Body>
           
            <Image src={sudeep}/>
            </Card.Body>
            
        </Card>
        <Card id="p3-card" className="p3-card-2">
            
            <Card.Body>
           
            <Image src={prakhar}/>
            </Card.Body>
            
        </Card>
        <Card id="p3-card" className="p3-card-1">
            
            <Card.Body >
            <Image src={piyush}/>
            </Card.Body>
            
        </Card>
        
        </div>
    </div>
    </div>
  )
}
