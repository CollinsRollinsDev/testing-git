import type { NextApiRequest, NextApiResponse } from "next";
const mail = require('@sendgrid/mail');

type Data = {
  name: string;
  status:string
};

 const handler = async(req:any, res:any) => {

  const body = JSON.parse(req.body);

  const data = {
    to:'collinsrollins07@gmail.com',
    from:'hello@collinsrollins.com',
    subject:'New web message',
    text:'bla bla bla bla',
    // html:''
  }

  return res.status(200).send({status:'ok'})
} 

export default handler