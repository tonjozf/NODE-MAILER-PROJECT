const route = require('express').Router()
const nodemailer = require('nodemailer')


require('dotenv').config()

route.get('/',(req,res)=>{
    try {
        res.send('hello world')
    } catch (error) {
        res.status(400).send('Error' + error.message)
    }
})

route.post('/nodemailer',(req,res)=>{
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
          });
          


        let mailOptions = req.body
        console.log(mailOptions);
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.status(201).send('send is sucess')
        
    } catch (error) {
        res.status(400).send('Error' + error.message)
    }
})

module.exports = route

