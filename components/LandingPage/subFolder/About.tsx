/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./About.module.css";


const About = () => {

  return (
    <>
      <section id="aboutCollinsRollins" data-aos="fade-up" className={styles.abtContainer}>
        <h1 className={styles.head1}>About Me</h1>
        <div className={styles.narration}>
          <p>
          I am a MERN_STACK_WEB_DEVELOPER with over two years of experience. I am hail from Nigeria, West
            Africa. I am a guy completely driven by passion, especially in the
            IT industries, and this passion has pushed me to learn to code. Coding is
            an addiction for me and I am not curing myself off it anytime soon.
            It is always a thing of joy for me to use my skills to solve the
            problems of others, as well as mine. Other hobbies of mine include Travelling,
            Playing Games, Hanging Out, Listening to Music and Eating 😂 etc.
        
          </p>
        </div>
      <a href="/Collins_Rollins_Resume.pdf" download>
        <button className={styles.cvBtn}>Download My Resume</button>
        </a>
      </section>
    </>
  );
};

export default About;