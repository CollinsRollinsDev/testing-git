import type { NextApiRequest, NextApiResponse } from "next";
import mail from '@sendgrid/mail';

const key:any = process.env.SENDGRID_API_KEY
mail.setApiKey(key);

 const handler = async(req:any, res:any)  => {

  const body = await JSON.parse(req.body);
  const subject = body.subject
  const name = body.name
  const email = body.email
  const message = body.message

  
  const data:any = {
    to: 'collinsrollins07@gmail.com',
    from: `portfolio-website@collinsrollins.com`,
    subject: `Message from your Portfolio with subject: ${subject}`,
    text: `Hi Collins Rollins, ${name} with the email ${email} just contacted you via your porfolio website. Below are the message in quote.
       `,
    html: `<body><h3>Hello there,</h3><p>${message}</p><br></br><center>
      <img src="https://www.owupress.com/uploads/2020/03/1583237252-3dffe754-10d2-44ea-870c-1bacc7b28d0b-150x150.jpeg" alt="Signature..." /></center>
    </body>`,
    // attachments: [{
    //   filename: `Public Cover Photo of Collins Rollins`,
    //   path:'./public/cover3.png',
    // content:'',
    // }]
    // html:''
  }
  const responseFromSendgrid = await mail.send(data);
  if(responseFromSendgrid[0].statusCode !== 202){
    return res.status(200).json({
      status: 'ok',
      success: false,
      message: "Something went wrong. Can you consider trying again?"
    })
  }

  return res.status(200).json({
  status: 'ok',
  success: true,
  message: "message is on its way!"
})
} 

export default handler