import React, { Component } from 'react'
import { Form, Button, Card, Image } from "react-bootstrap"
import axios from 'axios';


export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
        }
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMsgChange(event) {
        this.setState({message: event.target.value})
    }
    submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
}

resetForm(){
        this.setState({name: '', email: '',subject:'', message: ''})
}
  render() {
    return (
        <div>
        <div className="text-center">
          <a href="/">
  
          <Image src="/logogroup.png"/ >
          </a>
        </div>
        <Card className="shadow p-3 mb-5 bg-white" style={{borderRadius: "20px"}}>
          <Card.Body style={{borderRadius: "20px"}}>
            <h2 className="text-center mb-4" style={{fontSize: '22px', fontWeight: 'bold'}}>Get in touch with us!</h2>
          
            <Form onSubmit={this.submitEmail.bind(this)} method="POST" >
  
              <Form.Group id="name" className="mb-4" >
                
                <Form.Control type="name" style={{height: "45px"}} placeholder = "Name"  required value={this.state.name} 
                                       onChange={this.onNameChange.bind(this)} />
              </Form.Group>
              <Form.Group id="email" className="mb-4" >
                
                <Form.Control type="email" style={{height: "45px"}} placeholder = "Email"  required value={this.state.email} onChange=
                                      {this.onEmailChange.bind(this)} />
              </Form.Group>
              <Form.Group id="subject" className="mb-4" >
                
                <Form.Control type="subject" style={{height: "45px"}} placeholder = "Subject" value={this.state.subject}
                                      onChange={this.onSubjectChange.bind(this)} />
              </Form.Group>
              <Form.Group id="message" className="mb-4" >
                
                <Form.Control type="message" style={{height: "45px"}} placeholder = "Message" required value={this.state.message}
                                       onChange= {this.onMsgChange.bind(this)} />
              </Form.Group>
              <div className="text-center ">
              <Button className="px-3" id="rs-button" type="submit">
                Submit
              </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
        
      </div>
    )
  }
}


