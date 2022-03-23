// const express = require('express');
// const sgMail = require('@sendgrid/mail');
// const cors = require('cors');
// require("dotenv").config();
// const bodyParser = require('body-parser');



// sgMail.setApiKey("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")
// // console.log(process.env.REACT_APP_SENDGRID_API_KEY)
// const app = express();


// app.use(bodyParser.json());

// const corsOptions ={
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))

// // app.post('/send', (req, res,next) => {
// //   var email = req.body.email
// //   var name = req.body.name
// //   var subject = req.body.subject
// //   var message = req.body.message

  const msg = {
    to: 'piyushgautamtg@gmail.com', // Change to your recipient
    from: 'piyushgautamtg@gmail.com', // Change to your verified sender
    subject: "subject",
    text: "message",
    html: `<strong>Sent from , email is </strong>`
  }

//   sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//     // res.status(200).json('done')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// // })

// const PORT = 5000 || 8080
// app.listen(PORT, () => console.info(`server has started on ${PORT}`))



var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
require("dotenv").config();
console.log(process.env.XOAUTH2_USERNAME);
var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: "piyushgautamtg@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      clientId: "382667652652-po43cr77cds3v7fitrs7goddrsir6icn.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04rQ0lGjreJSdCgYIARAAGAQSNwF-L9IrCnPy6cGqJel1O1tt3MdnJ-1Bd8xP9A7ldQt_IgIkr5b3dySewLIAqQ8UHHvdgJS7bjc"
    }
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

transporter.sendMail(msg);

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)