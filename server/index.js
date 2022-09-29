const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')



const PORT = process.env.PORT || 5000
app.get("/health-check", (req,res)=>{
    res.send('im healty')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
    origin:'https://oplot.co.il'
}))
app.post('/', async (req, res) => {
    const { firstName, lastName, email, phone, textMessage } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: email,
        to: 'orsasson72@gmail.com',
        subject: "Customer - Contact Details",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>${email}</h2>
        <p>${textMessage}</p>
        <p>${firstName + " " +  lastName}</p>
        <p>${phone}</p>
         </div>
    `
    })
    res.send('success')
})



app.listen(PORT, () => {
    console.log(`server is on PORT ${PORT}`);
})