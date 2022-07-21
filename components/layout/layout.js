import { Fragment } from 'react/cjs/react.production.min';
import Footer from './Footer/footer';
import MainHeader from './Header/main-header';

function Layout(props) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
}

export default Layout;
