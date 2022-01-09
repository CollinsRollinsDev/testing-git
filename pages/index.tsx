import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LandingPage from '../components/LandingPage/LandingPage';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <Head>
        <title>Collins Rollins||Developer</title>
        <meta name="description" content="A COLLINS ROLLINS PORTFOLIO WEBSITE" />
        <link rel="icon" href="/cover3.png" />
        {/* <style>
@import url(`https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Oswald:wght@500&display=swap`);
</style> */}
      </Head>
      <LandingPage />
    </div>
  )
}

export default Home
