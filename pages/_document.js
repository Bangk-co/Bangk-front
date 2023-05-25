/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const styleTags = sheet.getStyleElement();
      return {
        ...initialProps,

        styleTags,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head>
         
        </Head>
        <body style={{ overflowY: "auto" }}>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://api.clientify.net/web-marketing/webforms/external/script/131456.js"
          ></script>   
          <script type="text/javascript">
          if (typeof trackerCode ==='undefined'){
              (function (d, w, u, o) {
                  w[o] = w[o] || function () {
                      (w[o].q = w[o].q || []).push(arguments)
                  };
                  a = d.createElement('script'),
                      m = d.getElementsByTagName('script')[0];
                  a.async = 1; a.src = u;
                  m.parentNode.insertBefore(a, m)
              })(document, window, 'https://analytics.clientify.net/tracker.js', 'ana');
              ana('setTrackerUrl', 'https://analytics.clientify.net');
              ana('setTrackingCode', 'CF-30309-30309-7SE5P');
              ana('trackPageview');
          }</script>
    
      
        </body>
      </Html>
    );
  }
}

export default MyDocument;
