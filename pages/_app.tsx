import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SEO from "@bradgarropy/next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <SEO
        title="Collins Rollins Portfolio Website"
        description="Collins Rollins is a MERN Stack web developer with over 3 years of solid experience in working with a individuals and business alike in building real world applications. Collins Rollins is also a cross-platform mobile developer with React Native as tools for building these mobile apps"
        keywords={[
          "Collins Rollins",
          "Mern Stack",
          "MERN",
          "Web Developer",
          "React Js",
          "Website Developer",
          "Collins",
          "Rollins",
          "how to become a web developer",
          "web site development companies",
          "web development service",
          "freelance web developers",
          "web developer job",
          "web app development",
        ]}
        icon="/cover3.png"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
