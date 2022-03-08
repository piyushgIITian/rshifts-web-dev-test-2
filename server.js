const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser')

sgMail.setApiKey("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")
const app = express();

app.use(bodyParser.json());

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.post('http:localhost:5000/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
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
  })
  .catch((error) => {
    console.error(error)
  })
})

const PORT = 5000 || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))



