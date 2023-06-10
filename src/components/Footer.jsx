import React from 'react'
import goBackBtn from '../assets/FuckGoBack.svg'
import goHomeBtn from '../assets/FuckGoHome.svg'

const Footer = () => {
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
        alignItems: 'center'
    },
  }

  return (
    <div style={styles.footer}>
      <button style={{border: 'none', backgroundColor: '#00000000'}}><img src={goBackBtn}  height='50px' alt='back' /></button>
      <button style={{margin: '0 50px'}} className='btn'>Инструкции</button>
      <button style={{border: 'none', backgroundColor: '#00000000'}}><img src={goHomeBtn} height='50px' alt='home' /></button>
    </div>
  )
}

export default Footer