const mail = require("@sendgrid/mail");
const nodemailer = require("nodemailer");
require('dotenv').config();
const authenticate = process.env.AuthPass

// mail.setApiKey(process.env.SENDGRIDKey);
// mail.setApiKey("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");

const notifyCollinsRollins = async(name: any, email: any, subject: any, message: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): void; new(): any; }; }; }) => {
 try {
  const smtpTransport = nodemailer.createTransport({
    host:"smtp-relay.sendinblue.com",
    port:587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_SECRET
    },
  })

    const sendingmail = smtpTransport.sendMail({
      from: 'collinsrollins07@gmail.com',
      to: 'collinsrollinsmail@gmail.com',
      subject: `Message from your Portfolio with subject: ${subject}`,
      text: `Hi Collins Rollins, ${name} with the email ${email} just contacted you via your porfolio website. Below are the message in quote.
         
         `,
      html: `<body><h1>Hello there,</h1><p>${message}</p><br></br><center>
        <img src="https://www.owupress.com/uploads/2020/03/1583237252-3dffe754-10d2-44ea-870c-1bacc7b28d0b-150x150.jpeg" alt="Signature..." /></center>
      </body>`,
      attachments: [{
        filename: `Public Cover Photo of Collins Rollins`,
        path:'./public/cover3.png'
      }]
    })

    if(sendingmail){
      console.log(sendingmail)
      res.status(200).json({
        success:true,
        message: "Message sent successfully!!!"
      })
    }

 } catch (error) {
   console.log(error)
 }
}



export default async function handler(req: { body: string; }, res: any) {
  const {name, email, message, subject} = await JSON.parse(req.body);
  // console.log(name, email, message, subject)
  // console.log(req.body);

  await notifyCollinsRollins(name, email, subject, message, res);

  // const message = `
  //     Name: ${body.name}\r\n
  //     Email: ${body.email}\r\n
  //     Message: ${body.message}\r\n
  //   `;

    // const data = {
    //   to: "collinsrollins07@gmail.com",
    //   // from: "hello@smarttechs.com.ng",
    //   from: "hello@smarttechs.com.ng",
    //   subject: "New Message From Portfolio",
    //   text: message,
    //   html: message.replace(/\r\n/g, "<br />")
    // }

    // mail.send(data);

  // res.status(200).send("Ok");
}