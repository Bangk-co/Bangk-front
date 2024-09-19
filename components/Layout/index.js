import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Div } from "@/styles/Common";
import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, isMobile, isTablet, showHeaderAndAnimation }) => {
  const [showTransition, setShowTransition] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => {
      setShowTransition(showHeaderAndAnimation);
      setContentLoaded(false);
    };

    const handleContentLoaded = () => {
      setContentLoaded(true);
    };

    router.events.on("routeChangeStart", handleComplete);
    router.events.on("routeChangeComplete", handleContentLoaded);

    return () => {
      router.events.off("routeChangeStart", handleComplete);
      router.events.off("routeChangeComplete", handleContentLoaded);
    };
  }, [router, showHeaderAndAnimation]);

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
      {showHeaderAndAnimation && (
        <Header isMobile={isMobile} isTablet={isTablet} />
      )}
      <div className={styles.contentContainer}>{children}</div>
      {showHeaderAndAnimation && (
        <Footer isMobile={isMobile} isTablet={isTablet} />
      )}
    </Div>
  );
};

export default Layout;
