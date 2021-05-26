import "../styles/globals.css";
import "../styles/index.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <Component {...pageProps} />

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script type="text/javascript">AOS.init();</script>
    </Layout>
  );
}

export default MyApp;
