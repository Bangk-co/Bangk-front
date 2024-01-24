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
          <script
            type="text/javascript"
            src="https://api.clientify.net/web-marketing/webforms/external/script/132164.js"
          ></script>
        </Head>
        <body style={{ overflowY: "auto" }}>
          <Main />
          <NextScript />
          <script type="text/javascript" src="/static/entry-script.js" />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NSWGB6R3"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
