import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/images/site/ico.png" />
                <meta name="favicon" content="/images/site/ico.png" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
