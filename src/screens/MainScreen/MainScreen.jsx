import React from 'react'
import Footer from '../../components/Footer'
import Tests from '../../components/Tests'
import WaterMark from '../../elements/WaterMark'

const MainScreen = () => {
  return (
    <div>
      <WaterMark/>
      <Tests/>
      <Footer/>
    </div>
    
  )
}

export default MainScreen