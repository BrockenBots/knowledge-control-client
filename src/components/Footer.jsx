import React, { useState } from 'react'
import goBackBtn from '../assets/GoBack.svg'
import goHomeBtn from '../assets/GoHome.svg'
import { useNavigate } from 'react-router-dom'
import Modal from '../elements/Modal'

const Footer = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  
  const styles = {
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100vw',
        left: '0',
        backgroundColor: '#45DEFF',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
  }

  return (
    <>
    {modal && <Modal closeModal={setModal}/>}
    <div style={styles.footer}>
      <button onClick={() => navigate(-1)} style={{border: 'none', backgroundColor: '#00000000'}}><img src={goBackBtn}  height='50px' alt='back' /></button>
      <button onClick={() => setModal(true)} style={{margin: '0 50px'}} className='btn'>Инструкции</button>
      <button onClick={() => navigate('/')} style={{border: 'none', backgroundColor: '#00000000'}}><img src={goHomeBtn} height='50px' alt='home' /></button>
    </div>
    </>
  )
}

export default Footer