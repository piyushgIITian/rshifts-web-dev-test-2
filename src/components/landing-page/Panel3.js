import React from 'react'
import { Card } from 'react-bootstrap'
import "../../style.css"


export default function Panel3() {
  return (
      <div style={{position:"relative"}}>
    <div className="panel-3 ">
        <div className="p3-cards d-flex justify-content-center align-items-center ">
        
        <Card id="p3-card" className="p3-card-1">
            
            <Card.Body>
           
            <Card.Text>
            Need controllers for VR. So VR is annoying!
            </Card.Text>
            </Card.Body>
            
        </Card>
        <Card id="p3-card" className="p3-card-2">
            
            <Card.Body>
           
            <Card.Text>
            Not an issue now, because we provide best hand tracking algorithms to make your phone the one and only controller you always had.
            </Card.Text>
            </Card.Body>
            
        </Card>
        <Card id="p3-card" className="p3-card-1">
            
            <Card.Body>
           
            <Card.Text>
            Don’t hesitate now, register now and enter the RWorld at the earliest.
            </Card.Text>
            </Card.Body>
            
        </Card>
        </div>
    </div>
    <div className="panel-3-2">
        <div className="p3-2-text justify-content-center align-items-center ">
            <div className='panel-3-2-txt1'>
                GET INSIDE THE<br/>
            </div>
            <div className='panel-3-2-txt2'>
                METAVERSE<br/>
            </div>
            <div className='panel-3-2-txt1'>
                IN THREE SMALL STEPS
            </div>
        
        </div>
        
    </div>
    </div>
  )
}
