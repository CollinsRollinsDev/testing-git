import styles from './LandingPage.module.css';
import About from './subFolder/About';
import AboutSection from './subFolder/AboutSection';
import Contact from './subFolder/Contact';
import Footer from './subFolder/Footer';
import Header from "./subFolder/Header";
import Intro from './subFolder/Intro';
import Projects from './subFolder/Projects';
import Skills from './subFolder/Skills';

const LandingPage = () => {
    return (
        <section className={styles.container}>
            <Header />
            <Intro />
             <About /> 
             {/*
            <AboutSection />
            */} 
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </section>
    )
}

export default LandingPage
