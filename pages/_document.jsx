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
          href="/fonts/GillSans-Medium.woff2"
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

        <link
          rel="preload"
          href="/fonts/GillSans-Regular.woff2"
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

        {/* <script
          data-b24-form="inline/87/4mheci"
          data-skip-moving="true"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
              })(window,document,'https://cdn.bitrix24.eu/b4256921/crm/form/loader_87.js');
            `,
          }}
        /> */}
      </body>
    </Html>
  );
};

export default Document;
