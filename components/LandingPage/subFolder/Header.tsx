/* eslint-disable react/no-unescaped-entities */
import styles from "./Header.module.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    !toggleMenu ? setToggleMenu(true) : setToggleMenu(false);
  };

  const removeMenu = () => {
    setToggleMenu(false);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleToggle = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  const mMenu = (
    <section className={styles.mMenu}>
      <section className={styles.menuHolder}>
        <Link href="/" passHref>
          <div onClick={removeMenu}>Home</div>
        </Link>
        <Link href="/#aboutCollinsRollins" passHref>
          <div onClick={removeMenu}>About</div>
        </Link>

        <Link href="/#projectsComponent" passHref>
          <div onClick={removeMenu}>Projects</div>
        </Link>

        <Link href="/#skillsComponents" passHref>
          <div onClick={removeMenu}>Skills</div>
        </Link>

        <Link href="/#contactComponents" passHref>
          <div onClick={removeMenu}>Contact</div>
        </Link>
      </section>
    </section>
  );

  if (!mounted) return null;

  return (
    <>
      <Head>
        {/* <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Oswald:wght@500&display=swap`);
        </style> */}
        {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
</style> */}
      </Head>
      <section data-aos="fade-down" className={styles.container}>
        <section
          data-aos="fade-right"
          data-aos-delay="600"
          className={styles.name}
        >
          CollinsRollins
        </section>
        <section
          data-aos="fade-right"
          data-aos-delay="600"
          className={styles.menu}
        >
          <Link href="/" passHref>
            <div>Home</div>
          </Link>

          <Link href="/#aboutCollinsRollins" passHref>
            <div>About</div>
          </Link>

          <Link href="/#projectsComponent" passHref>
            <div>Projects</div>
          </Link>

          <Link href="/#skillsComponents" passHref>
            <div>Skills</div>
          </Link>

          <Link href="/#contactComponents" passHref>
            <div>Contact</div>
          </Link>

          <div onClick={handleToggle} className={styles.dark}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm.029-12c2.206 0 4 1.794 4 4s-1.794 4-4 4v-8zm0-2c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6z" />
            </svg>
          </div>
        </section>
        <section onClick={handleMenuClick} className={styles.mobileMenuIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path d="M13 6h-13v-4h13v4zm0 4h-13v4h13v-4zm0 8h-13v4h13v-4zm3-8l4 5.075 4-5.075h-8z" />
          </svg>
        </section>
      </section>

      {toggleMenu ? mMenu : null}
    </>
  );
};

export default Header;
