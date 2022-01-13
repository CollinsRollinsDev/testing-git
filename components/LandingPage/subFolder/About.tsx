/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./About.module.css";
import { useEffect } from "react";
import Head from "next/head";
import React from "react";

const About = () => {

  return (
    <>
      <Head>
        {/* <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap`);
        </style> */}
      </Head>
      <section id="aboutCollinsRollins" data-aos="zoom-in" className={styles.abtContainer}>
        <h1 className={styles.head1}>About Me</h1>
        <div className={styles.narration}>
          <p>
            {/* I am a MERN_STACK_WEB_DEVELOPER with over two years of experience. I am hail from Nigeria, West
            Africa. Completely driven by passion, especially in the
            IT industries, I learn to code. Coding is
            an addiction for me and I am not curing myself off it anytime soon.
            It is always a thing of joy for me to use my skills to solve the
            problems of others, as well as mine. Other hobbies of mine include Travelling,
            Playing Games, Hanging Out, Listening to Music and Eating 😂 etc. */}
            I am a well-experienced web-developer with over two years of experience. I am hail from Nigeria, West Africa. I am a guy completely driven by passion, especially in the IT industries and these passions led me to learn to code. coding is an addiction for me and I am not curing myself off it anytime soon. It is always a thing of joy for me to use my skills to solve problems of others, as well as mine. Other hobbies of mine include Travelling, Playing Games, Hanging Out etc.
          </p>
        </div>
      <a href="https://drive.google.com/uc?export=download&id=1QWSGYBiZ6Nf--L_RcvLTGa08MHAf5zmo">
        <button style={{fontWeight:'800'}} className={styles.cvBtn}>Download My Resume</button>
        </a>
      </section>
    </>
  );
};

export default About;
