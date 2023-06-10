import React from 'react'

const StartScreen = () => {
  return (
    <div><h1>ООО "ДОНСКОЙ МЯСНИК"</h1>
    <h2>Контроль знаний сотрудников</h2>
    <center className='goScreen-btn'>
      <a href='/login'><button className='btn' style={{height: '50px', width: '200px'}} >Войти</button></a>
    </center></div>
  )
}

export default StartScreen