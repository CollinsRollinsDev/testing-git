import { useEffect } from "react";
import Head from "next/head";
import styles from './AboutSection.module.css';
import React from "react";


const AboutSection = () => {
    return (
        <>
          <Head>
        {/* <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap`);
        </style> */}
      </Head>
            <section id="aboutCollinsRollins" data-aos="zoom-in" className={styles.abtContainer}>
        <h1 className={styles.header1}>About Me</h1>
        <div className={styles.narration}>
          I am a well-experienced web-developer with over two years of experience. I hail from Nigeria, West
            Africa. I am a guy completely driven by passion, especially in the
            IT industries and these passions led me to learn to code. coding is
            an addiction for me and I am not curing myself off it anytime soon.
              
        </div>
      {/* <a href="https://drive.google.com/uc?export=download&id=1QWSGYBiZ6Nf--L_RcvLTGa08MHAf5zmo">
        <button className={styles.cvBtn}>Download My Resume</button>
        </a> */}
            </section>
        </>
    )
}

export default AboutSection
