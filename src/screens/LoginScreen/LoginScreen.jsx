import React from 'react'
import WaterMark from '../../elements/WaterMark'
import goBackBtn from '../../assets/FuckGoBack.svg'
import './style.css'

const LoginScreen = () => {
  return (
    <div>
      <WaterMark/>
      <div className='loginWindow'>
        <div className='loginTitle'>Войдите чтобы начать тест</div>
        <div className='loginForm'>
          <div className='loginForm-input'>
            <label className='loginForm-input_element loginForm-input_Label'>Логин</label>
            <input className='loginForm-input_element loginForm-input_Input' placeholder='Введите свой логин'/>
          </div>
          <div className='loginForm-input'>
            <label className='loginForm-input_element loginForm-input_Label'>Пароль</label>
            <input className='loginForm-input_element loginForm-input_Input' placeholder='Введите свой пароль'/>
          </div>
        </div>
        <div className='loginNav'>
          <button style={{border: 'none', backgroundColor: '#00000000', marginRight: 'auto'}}><img src={goBackBtn} height='50px' alt='back'/></button>
          <button style={{margin: 'auto'}} className='btn'>Войти</button>
          <div class="right"></div>
        </div>
      </div>
    </div>
    
  )
}

export default LoginScreen