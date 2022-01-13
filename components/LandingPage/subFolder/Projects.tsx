import styles from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Head from "next/head";

interface Incoming{
  isIPhone : any
}

const Projects = ({isIPhone}:Incoming) => {
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
          <section>
            <div className={styles.imgDiv}>
              <Image
                //   loader={myLoader}
                src="/proj1.png"
                alt="Wifispace Landing Page Image"
                layout="fill"
                priority
              />
            </div>
            <div className={styles.overview}>
              <div className={styles.head}>
                <h3>WIFI SERVICES WEBSITE DEVELOPMENT</h3>
              </div>
              <div className={styles.content}>
                <p>
                  I built this Full-Stack website using Next.Js (a framework of
                  React.js) and Redux for state managements. It is very mobile
                  responsive and overall smooth users-experience.
                </p>
              </div>
            </div>
            <a href="https://smarttechs.com.ng">
              <div className={styles.view}>
                <button>View</button>
              </div>
            </a>
          </section>

          <section>
            <div className={styles.imgDiv}>
              <Image
                //   loader={myLoader}
                src="/proj2.png"
                alt="Trade Botting Landing Page Image"
                layout="fill"
                priority
              />
            </div>
            <div className={styles.overview}>
              <div className={styles.head}>
                <h3>TRADING BOT & PREDICTION WEBSITE</h3>
              </div>
              <div className={styles.content}>
                <p>
                  I built this Front-end website using Next.Js and Redux for
                  state managements. I also made API calls to coingecko and
                  manipulated the date into complex calculations, which enables
                  the bot predict crypto prices in realtime. It is very mobile
                  responsive and overall smooth users-experience.
                </p>
              </div>
            </div>
            <a href="https://tradebotting.vercel.app">
              <div className={styles.view}>
                <button>View</button>
              </div>
            </a>
          </section>
{/* 
          <section>
            <div className={styles.imgDiv}>
              <Image
                src="/proj3.png"
                alt="School Backyard Image"
                layout="fill"
                priority
              />
            </div>
            <div className={styles.overview}>
              <div className={styles.head}>
                <h3>EDUCATIONAL WEBSITE DEVELOPMENT</h3>
              </div>
              <div className={styles.content}>
                <p>
                  I built this Full-Stack website using Html, Css, Javascript,
                  Node.js/Express, MongoDb and Strapi CMS. It is very mobile
                  responsive and overall smooth users-experience. It is also
                  very fast.
                </p>
              </div>
            </div>
            <div className={styles.view}>
              <a href="https://schoolbackyard.vercel.app">
              <button>View</button>
              </a>
            </div>
          </section> */}

          <section>
            <div className={styles.imgDiv}>
              <Image
                //   loader={myLoader}
                src="/scorelite.png"
                alt="Collins Rollins Love Status"
                layout="fill"
                priority
              />
            </div>
            <div className={styles.overview}>
              <div className={styles.head}>
                <h3>FOOTBALL HIGHLIGHTS WEBSITE</h3>
              </div>
              <div className={styles.content}>
                <p>
                  I built this Front-end website using HTML, CSS and JAVASCRIPT.
                  It makes AJAX request to some API and retrieve data, which is
                  then used to display the video of the selected match. It is
                  very mobile responsive and overall smooth users-experience.
                </p>
              </div>
            </div>
            <a href="https://scorelite.netlify.app/">
              <div className={styles.view}>
                <button>View</button>
              </div>
            </a>
          </section>

          <section>
            <div className={styles.imgDiv}>
              <Image
                //   loader={myLoader}
                src="/chatloop.png"
                alt="Chatloop image"
                layout="fill"
              />
            </div>
            <div className={styles.overview}>
              <div className={styles.head}>
                <h3>CHAT APPLICATION WEBSITE</h3>
              </div>
              <div className={styles.content}>
                <p>
                  I built this Front-end website using Socket.io, Next.js and very handy
                  React.Js libraries for Front-end and Node/Express.Js for the
                  server-side. It works similar to Whatsapp. I made use of
                  React-Context and Redux for state Management. It is very
                  mobile responsive and overall smooth users-experience.
                </p>
              </div>
            </div>
            <a href="https://chatloop.vercel.app/">
            <div className={styles.view}>
              <button>View</button>
            </div>
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
