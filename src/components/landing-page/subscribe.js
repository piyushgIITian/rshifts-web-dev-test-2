import React from 'react'
import { Button } from 'react-bootstrap'


export default function subscribe() {
  return (
    <div style={{
        width:"100%",
        height:"400px",
        fontFamily: "Poppins",
        fontSize: "28px",
        lineHeight: "48px",
        color: "#1F1449",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"

    }}>
        Subscribe to our newsletter to get the latest updates of RShifts
        <div className="text-center ">
        <Button className="px-3 mt-3" style={{
               background: "#7962F5",
               borderRadius: "10px", 
               width: "121px",
               height: "41px", 
        }} type="submit">
            Subscribe
        </Button>
        </div>
    </div>
  )
}
