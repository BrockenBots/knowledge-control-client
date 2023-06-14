import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { isLogged, Login } from '../../api/Login';
import WaterMark from '../../elements/WaterMark'
import goBackBtn from '../../assets/GoBack.svg'
import './style.css'

const LoginScreen = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const user = localStorage.getItem('user')
  const onFormSubmit  = data => {
    
      Login(data.login, data.password)
      alert('Wait a little')
      setTimeout(() => {
        navigate('/')
        window.location.reload()
      }, 500)
      
    
  }
  

  return (
    <div className={`App ${isLogged() ? 'withFooter' : 'withoutFooter'}`} >
      <div className='main'>
      <WaterMark/>
      <div className='loginWindow'>
        <div className='loginTitle'>Войдите чтобы начать тест</div>
          <form style={{marginTop: 'auto'}} onSubmit={handleSubmit(onFormSubmit)}>
          <div className='loginForm'>
            
            <div className='loginForm-input'>
              <label className='loginForm-input_element loginForm-input_Label'>Логин</label>
              <input type="text" name="login" {...register('login')}  className='loginForm-input_element loginForm-input_Input' placeholder='Введите свой логин'/>
            </div>
            <div className='loginForm-input'>
              <label className='loginForm-input_element loginForm-input_Label'>Пароль</label>
              <input type="text" name="password" {...register('password')}  className='loginForm-input_element loginForm-input_Input' placeholder='Введите свой пароль'/>
            </div>
          </div>
          <div className='loginNav'>
            <button style={{border: 'none', backgroundColor: '#00000000', marginRight: 'auto'}}><img src={goBackBtn} height='50px' alt='back'/></button>
            <a href='/' style={{padding: '0', margin: 'auto'}}><button type='submit'  className='btn'>Войти</button></a>
           
            <div class="right"></div>
          </div>
        </form>
        
        
      </div>
      </div>
    </div>
    
  )
}

export default LoginScreen