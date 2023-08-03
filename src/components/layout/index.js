import { Outlet } from 'react-router-dom'
import Footer from '../../components/modules/home/Footer';

const Layout = () => {

  return (
    <>
      <div style={{ background: "#000000" }}>
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default Layout
