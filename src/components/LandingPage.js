import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

import "../style.css"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Panel1 from './landing-page/Panel1'
import Panel2 from './landing-page/Panel2'
import Panel3 from './landing-page/Panel3'
import Panel4 from './landing-page/Panel4'
import Panel5 from './landing-page/Panel5'
import Subscribe from './landing-page/subscribe'

export default function LandingPage() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  var headerText = "SIGN IN"

  if(currentUser){
    headerText="SIGN OUT"
  }
  else{
    headerText="SIGN UP"
  }

  return (
    <div className='wrap' style={{background:"white"}}>
      <Header buttonFunc={handleLogout} buttonText={headerText} link={"/signup"}/>
      <strong>{error}</strong>
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
        

