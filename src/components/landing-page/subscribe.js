import React from 'react'
import { Button} from 'react-bootstrap'
import emailjs from "emailjs-com"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from 'react-router-dom'

export default function Subscribe() {
  const { currentUser} = useAuth()
  const history = useHistory()
  async function handleSubmit(e){
    e.preventDefault(); // Prevents default refresh by the browser
    console.log("HEllo handle submit worked",e.target)
    if(currentUser){
      await emailjs.send('service_qzlsd4d','template_vyrsvlj',{
        name: currentUser.displayName,
        email: currentUser.email
      },process.env.REACT_APP_EMAILJS_USER_ID_TWO).then((result) => {
        alert("Hurray!! You have subscribed to RShifts", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
    }
    else{
      alert("Please login to subscribe to our newsletter");
      history.push("/login");
    }
  };
  return (
    
    <div className="subscribe ">
        Subscribe to our newsletter to get the latest updates of RShifts
        <div className="text-center ">
        <Button className="px-3 mt-3 hvr-float-shadow " style={{
               background: "#7962F5",
               borderRadius: "10px", 
               width: "121px",
               height: "41px", 
        }} type="submit" onClick={handleSubmit}>
            Subscribe
        </Button>
        </div>
    </div>
  )
}
