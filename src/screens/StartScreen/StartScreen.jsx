import React from 'react'
import { isLogged } from '../../api/Login'

const StartScreen = () => {
  return (
    <div className={`App ${isLogged ? 'withFooter' : 'withoutFooter'}`} >
      <div className='main'>
        <h1>ООО "ДОНСКОЙ МЯСНИК"</h1>
        <h2>Контроль знаний сотрудников</h2>
        <center className='goScreen-btn'>
          <a href='/login'><button className='btn' style={{height: '50px', width: '200px'}} >Войти</button></a>
        </center>
      </div>
    </div>
  )
}

export default StartScreen