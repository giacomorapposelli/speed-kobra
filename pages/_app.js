import Layout from '../components/layout/layout';
import Overlay from '../contexts/overlay-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Overlay>
                <Component {...pageProps} />
            </Overlay>
        </Layout>
    );
}

export default MyApp;
