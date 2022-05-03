import styles from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import EachProject from "./EachProject";

interface Incoming {
  isIPhone: any;
}

const Projects = ({ isIPhone }: Incoming) => {
  // useEffect(() => {
  //     AOS.init({ duration: 1500 });
  //   }, []);

  return (
    <>
      <Head>
        {/* <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap`);
        </style> */}
      </Head>
      <section
        id="projectsComponent"
        data-aos="fade-up"
        className={styles.projectContainer}
      >
        <h2 className={styles.head2}>Projects</h2>
        <section className={!isIPhone ? styles.projSec : styles.projSecIphone}>
          <EachProject
            imgSrc="/proj1.png"
            imgAlt="Wifispace Landing Page Image"
            title="WIFI SERVICES WEBSITE DEVELOPMENT"
            description={`I built this Full-Stack website using Next.Js (a framework of React.js) and Redux for state management. It is very mobile-responsive and overall smooth users-experience.`}
            linkToSite={`https://www.wifibase.co`}
          />

          <EachProject
            imgSrc="/proj2.png"
            imgAlt="Trade Botting Landing Page Image"
            title="TRADING BOT & PREDICTION WEBSITE"
            description={`I built this Front-end website using Next.Js and Redux for state management. I also made API calls to coingecko and manipulated the date into complex calculations, which enables the bot to predict crypto prices in realtime. It is very mobile-responsive and overall smooth users-experience.`}
            linkToSite={`https://tradebotting.vercel.app`}
          />

          <EachProject
            imgSrc="/crsearch.png"
            imgAlt="Rollins Search Image"
            title="My Working Google Clone Website"
            description={`I built this website using a react js framework (NextJs) with Typescript and added a bit of backend to fetch the users' request and filter the result for the top priority. It uses Google Api. This means all results returned are exactly what a Google search will give you. Also, I added images, videos and news searches to it. It is mobile responsive as well! `}
            linkToSite={`https://rollins-search.vercel.app/search`}
          />

          <EachProject
            imgSrc="/ecomSite.png"
            imgAlt="Collins Rollins Site"
            title="GADGETS ECOMMERCE SITE"
            description={`This is a fullstack ecommerce site that I build with NextJs. The designs are modern and It uses Sanity for CMS.`}
            linkToSite={`https://futureecom.vercel.app`}
          />

          <EachProject
            imgSrc="/wngs.png"
            imgAlt="Collins Rollins Site"
            title="BIT BOOTCAMP"
            description={`This is a Full-Stack Bootcamp website with numerous features such as payment integration, scheduling appointments, comments, video courses, graph data etc. Stack used was MERN (NextJs as React framework)`}
            linkToSite={`https://wngs.vercel.app/`}
          />

          <EachProject
            imgSrc="/scorelite.png"
            imgAlt="Collins Rollins Site"
            title="FOOTBALL HIGHLIGHTS WEBSITE"
            description={`I built this Front-end website using HTML, CSS and JAVASCRIPT. It makes AJAX requests to some API and retrieves data, which is then used to display the video of the selected match. It is very mobile-responsive and overall smooth user-experience.`}
            linkToSite={`https://scorelite.netlify.app/`}
          />

          <EachProject
            imgSrc="/chatloop.png"
            imgAlt="Chatloop image"
            title="CHAT APPLICATION WEBSITE"
            description={`I built this Front-end website using Socket.io, Next.js and very handy React.Js libraries for Front-end and Node/Express.Js for the server-side. It works similar to Whatsapp. I made use of React-Context and Redux for state management. It is very mobile-responsive and has an overall smooth user-experience.`}
            linkToSite={`https://chatloop.vercel.app/`}
          />

          <EachProject
            imgSrc="/assignment.png"
            imgAlt="Lyft Clone!!"
            title="My Lyft Clone Website!!!"
            description={`This landing page was built using ReactJs under 24 hours and with such limited time, you need to see the UI of the site! This was as a result of an assignment given to me during my early days of learning react. The site is a direct clone of https://lyft.com and it is frontend only and responsive.`}
            linkToSite={`https://rollins-assignment.vercel.app/`}
          />

          <EachProject
            imgSrc="/truevine-port.png"
            imgAlt="truevine christian centre!!"
            title="A CHURCH WEBSITE!!!"
            description={`This is one of my early projects as a web developer. I built this again using NextJs with Typescript for both frontend and backend, Redux for state management, GraphCMS for headless cms, graphQl for api calls and hosted it on vercel.`}
            linkToSite={`https://truevine.vercel.app/`}
          />

          <EachProject
            imgSrc="/crudstack.png"
            imgAlt="crudstack from image collins rollins!!"
            title="A Complete NodeJs(Backend) CRUD/Authentication Web App!"
            description={`I built this using React.Js with Typescript for frontend and Nodejs(Express) for the backend. Features include, creating accounts in MongoDB database with passwords being encrypted, logging in securely using jwt tokens and cookies, updating existing user details, changing password, deleting a user, logout, protected routes and darkmode! Although this is a fully intended backend application, the UI is not left out!`}
            linkToSite={`https://crudstack-client-side.vercel.app/`}
          />
        </section>
      </section>
    </>
  );
};

export default Projects;
