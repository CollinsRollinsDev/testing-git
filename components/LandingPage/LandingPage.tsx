import styles from "./LandingPage.module.css";
import About from "./subFolder/About";
import AboutSection from "./subFolder/AboutSection";
import Contact from "./subFolder/Contact";
import Footer from "./subFolder/Footer";
import Header from "./subFolder/Header";
import Intro from "./subFolder/Intro";
import Projects from "./subFolder/Projects";
import Skills from "./subFolder/Skills";
import React, {useState, useEffect} from "react";
import detectDevice from '../../utils/checkDevice';

const LandingPage = () => {
    // let device:any = 'iphone';
    const [isIPhone, setIsIphone] = useState<boolean>(true)

    // check if phone is iphone!
    const getPhoneCheck = async() => {
      const device = await detectDevice();
      if(device === "iphone"){
        setIsIphone(true)
      } else{
        setIsIphone(false);
      }
    }
  
    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // device = detectDevice()
      getPhoneCheck();
    }, [])
  
  return (
    <section className={styles.landingContainer}>
      <Header />
      <Intro />
      <About />
      <Projects isIPhone={isIPhone} />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
};

export default LandingPage;
