import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from "../contexts/AuthContext"
import "../style.css"

import Panel1 from './landing-page/Panel1'
import Panel2 from './landing-page/Panel2'
import Panel3 from './landing-page/Panel3'
import Panel4 from './landing-page/Panel4'
import Panel5 from './landing-page/Panel5'
import Subscribe from './landing-page/subscribe'

export default function LandingPage() {
  var headerText = "SIGN IN"
  const { currentUser} = useAuth()

  if(currentUser){
    headerText="SIGN OUT"
  }
  else{
    headerText="SIGN IN"
  }

  return (
    <div className='wrap' style={{background:"white"}}>
      <Header buttonText={headerText} link={"/signup"}/>
      <Panel1/>
      <Panel2/>  
      <Panel3/>  
      <Panel4/>
      <Panel5/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
        

