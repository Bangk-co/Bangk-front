import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Div } from "@/styles/Common";
import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, isMobile, isTablet }) => {
  const [showTransition, setShowTransition] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => {
      setShowTransition(true);
      setContentLoaded(false);
      setTimeout(() => {
        setContentLoaded(true);
      }, 300);
    };

    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  const handleAnimationEnd = () => {
    setShowTransition(false);
  };

  return (
    <Div direction="column">
      <Head>
        <style global jsx>{`
          body {
            overflow: ${showTransition ? "hidden" : "auto"};
          }
        `}</style>
      </Head>
      {showTransition && (
        <div
          className={styles.pageTransition}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      <Header isMobile={isMobile} isTablet={isTablet} />
      <div className={contentLoaded ? styles.showContent : styles.hideContent}>
        {children}
      </div>
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Layout;
