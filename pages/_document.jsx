import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Roboto-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Roboto-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
