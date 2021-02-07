import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function PlugRoot({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Plug for Mac</title>
        <meta
          name="description"
          content="OS X player for The Hype Machine"
        ></meta>

        <meta property="og:site_name" content="Plug for Mac" />
        <meta property="og:image" content="/images/social-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          href="./favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PlugRoot;
