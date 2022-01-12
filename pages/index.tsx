import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LandingPage from '../components/LandingPage/LandingPage';
const Home: NextPage = () => {
  return (
    <section className={styles.container}>
     <Head>
        <title>Collins Rollins||Developer</title>
        <meta name="description" content="A COLLINS ROLLINS PORTFOLIO WEBSITE" />
        <link rel="icon" href="/cover3.png" />
      </Head>
      <LandingPage />
      
    </section>
  )
}

export default Home
