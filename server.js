const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');



sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.json());

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

<<<<<<< HEAD
app.post('http:localhost:5000/send', (req, res, next) => {
  var name = req.body.name
=======
app.post('/send', (req, res,next) => {
>>>>>>> 31b9a673780d746d98f4b14acc44a9ff56569633
  var email = req.body.email
  var name = req.body.name
  var subject = req.body.subject
  var message = req.body.message

  const msg = {
    to: 'piyush.gautam@rshifts.com', // Change to your recipient
    from: 'piyushgautamtg@gmail.com', // Change to your verified sender
    subject: subject,
    text: message,
    html: `<strong>Sent from ${name}, email is ${email}</strong>`
  }

  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
    res.status(200).json('done')
  })
  .catch((error) => {
    console.error(error)
  })
})

const PORT = 5000 || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))



