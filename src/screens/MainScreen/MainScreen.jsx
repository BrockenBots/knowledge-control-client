import React from 'react'
import Footer from '../../components/Footer'
import Tests from '../../components/Tests'
import WaterMark from '../../elements/WaterMark'
import { isLogged } from '../../api/Login'


const MainScreen = () => {

  return (
    <div className={`App ${isLogged ? 'withFooter' : 'withoutFooter'}`} >
      <div className='main'>
        <WaterMark/>
        <Tests/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default MainScreen