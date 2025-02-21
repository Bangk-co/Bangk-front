/* eslint-disable no-undef */
import { QueryClient, QueryClientProvider } from "react-query";
import "antd/dist/reset.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Toaster, ToastBar, toast } from "react-hot-toast";
import Head from "next/head";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "./app.css";

import Layout from "../components/Layout";
import { Link } from "@/components/Common/Link";
import { useMediaQuery } from "react-responsive";
import WhatsappButton from "@/components/WhatsappButton";
import checkSuccess from "../assets/icons/succes-toast.svg";
import errorToast from "../assets/icons/error-toast.svg";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps, isMobileServer, isTabletServer }) => {
  const queryClient = new QueryClient();

  const MUICssTheme = createTheme({
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: {
            cancelButtonLabel: "Cancelar",
          },
        },
      },
    },
  });

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

  const routesWithHeaderAndFooter = [
    "/",
    "/ahorra-en-tus-seguros",
    "/ahorra-en-tus-seguros/car-bangk",
    "/ahorra-en-tus-seguros/car-bangk/seguro-por-kilometro",
    "/ahorra-en-tus-seguros/car-bangk/todo-riesgo",
    "/ahorra-en-tus-seguros/car-bangk/danos-a-terceros",
    "/ahorra-en-tus-seguros/car-bangk/bangk-motos",
    "/ahorra-en-tus-seguros/med-bangk",
    "/conocenos",
    "/blog",
    "/contacto",
    "/legales",
    "/pet-bangk",
    "/pet-bangk/info-petbangk",
    "/pet-bangk/buscamos-tu-mascota",
    "/pet-bangk/condiciones",
    "/pet-bangk/asegura-ya",
  ];

  const showHeaderAndAnimation = routesWithHeaderAndFooter.includes(
    router.pathname
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <MUIThemeProvider theme={MUICssTheme}>
              <Head>
                <title>Bangk</title>
                <meta
                  content="width=device-width, initial-scale=1"
                  name="viewport"
                />
                <meta name="description" content="Ahorra tiempo y dinero" />
                <link rel="icon" href="/favicon.png" />
              </Head>
              {showHeaderAndAnimation && <WhatsappButton />}
              <Layout
                isMobile={isMobile}
                isTablet={isTablet}
                showHeaderAndAnimation={showHeaderAndAnimation}
              >
                <Component
                  {...pageProps}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </Layout>
              <Toaster
                position="bottom-right"
                reverseOrder={true}
                containerStyle={{ zIndex: 999999 }}
                toastOptions={{
                  duration: 8000,
                  success: {
                    icon: (
                      <Image
                        alt="check"
                        src={checkSuccess}
                        width={16}
                        height={16}
                      />
                    ),
                    style: {
                      background: theme.colors.green,
                    },
                  },
                  error: {
                    icon: (
                      <Image
                        alt="check"
                        src={errorToast}
                        width={20}
                        height={20}
                      />
                    ),

                    style: {
                      background: theme.colors.green,
                    },
                  },
                  loading: {
                    iconTheme: {
                      primary: theme.colors.gray,
                      secondary: theme.colors.gray300,
                    },
                    style: {
                      background: theme.colors.white,
                    },
                  },
                  style: {
                    minWidth: "400px",
                    zIndex: 999999,
                    color: theme.colors.white,
                    fontWeight: theme.fonts.weight.regular,
                    fontSize: theme.fonts.size.default,
                    fontFamily: theme.fonts.family,
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                {(t) => (
                  <ToastBar toast={t}>
                    {({ icon, message }) => (
                      <>
                        {icon}
                        {message}
                        {t.type !== "loading" && (
                          <Link
                            height="100%"
                            onClick={() => toast.dismiss(t.id)}
                          />
                        )}
                      </>
                    )}
                  </ToastBar>
                )}
              </Toaster>
            </MUIThemeProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
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
