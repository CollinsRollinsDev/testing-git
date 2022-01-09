import styles from './Skills.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import React from "react";


const Skills = () => {

    return (
            <>
            <Head>
                {/* <style>
                @import
                url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap`);
                </style> */}
            </Head>
             <section id="skillsComponents" data-aos="zoom-in" className={styles.container}>
                  <h4 className={styles.head4}>Skills</h4>
                    <section className={styles.skillsBox}>
                       <div id="sizing" className={styles.box}>
                                {/* <FontAwesomeIcon icon={faHtml} /> */}
                                <Image
                                    src="/html5.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>Html</p>
                       </div>

                       <div className={styles.box}>
                                <Image
                                    src="/css.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>Css</p>

                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/js.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>JavaScript</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/ts.svg"
                                    alt="Picture of typescript"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={70}

                                />
                                <p>Typescript</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/node.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}
                                    
                                />
                                <p>Node.Js</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/express.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}
                                    
                                />
                                <p>Express.Js</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/react.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>React.Js</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/next.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}
                                />
                                <p>Next.Js</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/redux.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>Redux</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/bootstrap.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>Bootstrap</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/sass.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // priority
                                    quality={50}

                                />
                                <p>SASS/SCSS</p>
                       </div>

                       <div className={styles.box}>
                       <Image
                                    src="/mongo.svg"
                                    alt="Picture of the author"
                                    width="50px"
                                    height="40px"
                                    layout="fixed"
                                    className={styles.icon}
                                    // 
                                    quality={50}
                                />
                                <p>MongoDb</p>
                       </div>
                    </section>
            </section>
          
            </>
    )
}

export default Skills

