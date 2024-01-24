/* eslint-disable no-undef */
import "antd/dist/reset.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "./app.css";

import Layout from "../components/Layout";
import { useMediaQuery } from "react-responsive";
import WhatsappButton from "@/components/WhatsappButton";

const MyApp = ({ Component, pageProps, isMobileServer, isTabletServer }) => {
  const isMobile =
    useMediaQuery({
      query: `(max-width: ${theme.breakpoints.sm})`,
    }) || isMobileServer;

  const isTablet =
    useMediaQuery({
      query: `(min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.md})`,
    }) || isTabletServer;
  const router = useRouter();

  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-NSWGB6R3");
  }, []);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("278194147905078");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Bangk</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Ahorra tiempo y dinero" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <WhatsappButton />
      <Layout isMobile={isMobile} isTablet={isTablet}>
        <Component {...pageProps} isMobile={isMobile} isTablet={isTablet} />
      </Layout>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async ({ ctx }) => {
  let isMobileServer = false;
  let isTabletServer = false;

  if (ctx.req && ctx.req.headers["user-agent"]) {
    isMobileServer = ctx.req.headers["user-agent"].match(
      /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
    isTabletServer = ctx.req.headers["user-agent"].match(/iPad|Tablet/i);
  }

  return {
    isMobileServer: !!isMobileServer,
    isTabletServer: !!isTabletServer,
  };
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  isMobileServer: PropTypes.bool,
  isTabletServer: PropTypes.bool,
};

export default MyApp;
