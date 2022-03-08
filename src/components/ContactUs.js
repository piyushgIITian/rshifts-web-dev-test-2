import React, {useRef } from 'react'
import { Form, Button, Card, Image } from "react-bootstrap"
import axios from 'axios';


export default function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  function resetForm(){
    nameRef.current = "";
    emailRef.current = "";
    messageRef.current = "";
    subjectRef.current = "";
  }
  async function submitEmail(e){
    console.log("you clicked submit");
      e.preventDefault();
      await axios({
        method: "POST", 
        url:"http://localhost:5000/send", 
        body:   {
          name: nameRef.current.value,
          email:emailRef.current.value,
          subject:subjectRef.current.value,
          message:messageRef.current.value,
        },
      }).then((response)=>{
        if (response.data.status === 'success'){
            alert("Message Sent."); 
            resetForm()
        }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
        }
      })
    }

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
      
        <Form onSubmit={submitEmail}  >

          <Form.Group id="name" className="mb-4" >
            
            <Form.Control type="name" style={{height: "45px"}} placeholder = "Name"   
                                   ref={nameRef} required />
          </Form.Group>
          <Form.Group id="email" className="mb-4" >
            
            <Form.Control type="email" style={{height: "45px"}} placeholder = "Email"  required  ref= {emailRef} />
          </Form.Group>
          <Form.Group id="subject" className="mb-4" >
            
            <Form.Control type="subject" style={{height: "45px"}} placeholder = "Subject" ref={subjectRef} />
          </Form.Group>
          <Form.Group id="message" className="mb-4" >
            
            <Form.Control type="message" style={{height: "45px"}} placeholder = "Message" required ref={messageRef} />
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
