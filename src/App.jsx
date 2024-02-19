import { useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='col-sm-12'>
         <SiteRoutes></SiteRoutes>
         <Footer />
        </div>
      </div>
     

    </>
  )
}

export default App
