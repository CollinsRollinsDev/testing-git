import React from 'react'
import styles from "./Projects.module.css";
import Image from "next/image";
import Head from "next/head";

const EachProject = ({imgSrc, imgAlt, title, description, linkToSite}) => {
  return (
    <section>
    <div className={styles.imgDiv}>
      <Image
        //   loader={myLoader}
        src={imgSrc}
        alt={imgAlt}
        layout="fill"
        priority
      />
    </div>
    <div className={styles.overview}>
      {/* <p>Github Repo Link: frontend</p> */}
      <div className={styles.head}>
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>
        <p>
          {description}
        </p>
      </div>
    </div>
    <a href={linkToSite} target="_blank" rel="noreferrer" >
      <div className={styles.view}>
        <button>View</button>
      </div>
    </a>
  </section>
  )
}

export default EachProject