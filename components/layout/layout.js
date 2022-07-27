import { Fragment } from 'react/cjs/react.production.min'
import Footer from './footer/footer'
import MainHeader from './header/main-header'

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
