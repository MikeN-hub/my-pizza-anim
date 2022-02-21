import { Outlet } from 'react-router-dom'
import Header from './Header'
import BackBtn from './BackBtn'
import ForwardBtn from './ForwardBtn'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <BackBtn />
      <ForwardBtn />
      <Outlet />
    </div>
  )
}

export default Layout
