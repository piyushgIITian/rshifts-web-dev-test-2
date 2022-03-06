import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import LandingPage from "./LandingPage"
import ContactUs from "./ContactUs"

import "../style.css"

function App() {
  return (
    <div className="background-gray font-poppins">
   
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={LandingPage}/>

              <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/contact-us" component={ContactUs}/>
                </div>
             </Container>

            </Switch>
          </AuthProvider>
        </Router>
    </div>
  )
}

export default App
