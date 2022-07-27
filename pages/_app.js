import Layout from '../components/layout/layout';
import Overlay from '../contexts/overlay-context';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Speedkobra official website</title>
                <link rel='shortcut icon' href='/favicon/favicon.ico' />
            </Head>
            <Overlay>
                <Component {...pageProps} />
            </Overlay>
        </Layout>
    );
}

export default MyApp;
