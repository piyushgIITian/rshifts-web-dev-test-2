import React from 'react'
import { Card } from 'react-bootstrap'
import "../../style.css"


export default function Panel3() {
  return (
      <div style={{position:"relative"}}>
        <div className="panel-3 ">
            <div className="p3-cards d-flex justify-content-center align-items-center ">
            
            <Card id="p3-card-2" className="p3-card-1">
                
                <Card.Body >
            
                <Card.Text >
                Who needs expensive VR Controllers?<br/>
                YOUR <a style={{color:"#AF4BF2"}}>HANDS</a> WILL DO THE JOB      
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card id="p3-card-2" className="p3-card-2">
                
                <Card.Body>
            
                <Card.Text>
                BE the first ones to Purchase Lands as <a style={{color:"#97FC68"}}>NFTs</a> in an open unaccquired meta-verse
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card id="p3-card-2" className="p3-card-1">
                
                <Card.Body>
            
                <Card.Text>
                    Don’t hesitate , register now and enter the <a style={{color:"#FF8584"}}>RWorld</a> at <br/>earliest.
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
