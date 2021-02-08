import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function PlugRoot({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Plug for Mac</title>
        <meta name="title" content="Plug for Mac" />
        <meta name="description" content="macOS player for the Hype Machine :heart:" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plugformac.com/" />
        <meta property="og:title" content="Plug for Mac" />
        <meta
          property="og:description"
          content="macOS player for the Hype Machine :heart:"
        />
        <meta property="og:image" content="/images/og-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.plugformac.com/" />
        <meta property="twitter:title" content="Plug for Mac" />
        <meta
          property="twitter:description"
          content="macOS player for the Hype Machine ❤️"
        />
        <meta name="twitter:image" content="/images/og-image.png?v=2" />
        <link
          href="/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PlugRoot;
