import styles from './Contact.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";

const Contact = () => {

  const [btnMsg, setBtnMsg] = useState("Send to Collins");

  const handleForm = async(e:any) => {
      e.preventDefault();
      setBtnMsg("Sending please wait.....")
    const formData:any = {}
    Array.from(e.currentTarget.elements).forEach((field:any) => {
      if(!field.name)  return;
        formData[field.name] = field.value
    })
    console.log("Sending to database...")
     const res = await fetch("/api/pushmail", {
        method: "POST",
        body: JSON.stringify(formData)
      });
     const data = await res.json();
     if(data){
      alert(data.message);
      setBtnMsg("Thank you! Message Sent!")
     }
  }

    return (
       <>
          <Head>
        {/* <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap`);
        </style> */}
      </Head>
             <section id="contactComponents" data-aos="zoom-in" className={styles.container}>
             <h5 className={styles.header}>Contact Me</h5>
             <form onSubmit={handleForm}>
                 <input type="text" name="name" placeholder="Name" />
                 <input type="email" name="email" placeholder="Email" />
                 <input type="text" name="subject" placeholder="Subject" className={styles.subject} />
                 <textarea name="message" placeholder="Message"></textarea>
                 <button>{btnMsg}</button>
             </form>
            </section>
       </>
    )
}

export default Contact