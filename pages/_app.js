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
        <meta name="description" content="OS X player for The Hype Machine ♥" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plugformac.com/" />
        <meta property="og:title" content="Plug for Mac" />
        <meta
          property="og:description"
          content="OS X player for The Hype Machine ♥"
        />
        <meta property="og:image" content="/images/social-card.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.plugformac.com/" />
        <meta property="twitter:title" content="Plug for Mac" />
        <meta
          property="twitter:description"
          content="OS X player for The Hype Machine ♥"
        />
        <meta property="twitter:image" content="/images/social-card.jpg" />
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
