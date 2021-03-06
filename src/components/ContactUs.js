import React, {useRef } from 'react'
import { Form, Button, Card, Image } from "react-bootstrap"
// 
import emailjs from "emailjs-com";


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
  async function handleSubmit(e){
    e.preventDefault(); // Prevents default refresh by the browser
    // console.log(e.target)
    await emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
    .then((result) => {
    alert("Message Sent, We will get back to you shortly", result.text);
    resetForm();
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
    });
    };
  // async function submitEmail(e){
  //   e.preventDefault();
  //   console.log("you clicked submit");
  //   console.log(nameRef.current.value);
  //   axios.post('https://localhost:5000/send',{
  //     name: nameRef.current.value,
  //     email:emailRef.current.value,
  //     subject:subjectRef.current.value,
  //     message:messageRef.current.value,
  //  })
  //     .then((response)=>{
  //       console.log("hello"+response.data)
  //       if (response.data === 'done'){
  //           alert("Message Sent."); 
  //           resetForm()
  //       }else {
  //           alert("Message failed to send.")
  //       }
  //     })
  //   }

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
      
        <Form onSubmit={handleSubmit}  >

          <Form.Group id="name" className="mb-4" >
            
            <Form.Control name="name" type="name" style={{height: "45px"}} placeholder = "Name"   
                                   ref={nameRef} required />
          </Form.Group>
          <Form.Group id="email" className="mb-4" >
            
            <Form.Control type="email" name="email" style={{height: "45px"}} placeholder = "Email"  required  ref= {emailRef} />
          </Form.Group>
          <Form.Group id="subject" className="mb-4" >
            
            <Form.Control type="subject" name="subject" style={{height: "45px"}} placeholder = "Subject" ref={subjectRef} />
          </Form.Group>
          <Form.Group id="message" className="mb-4" >
            
            <Form.Control type="message" name="message" style={{height: "45px"}} placeholder = "Message" required ref={messageRef} />
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
