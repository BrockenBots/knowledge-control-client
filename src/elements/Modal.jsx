import React from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {

    

  return (
    <div className='modalBackground'>
        <div className='modal'>
            <button className='modalBtn' onClick={() => closeModal(false)}>x</button>
            <div className='modal-inner'>
                <h1 className='modal-inner__header'>Инструкция</h1>
                <div className='modal-inner__main'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt ducimus ab. Libero qui dolorum illum nihil nisi ab reiciendis ullam magnam esse sunt similique, sit repudiandae. Dicta, recusandae et? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere provident et soluta earum ex error, ratione magnam. Cumque pariatur accusamus, ratione asperiores obcaecati explicabo eveniet quia corporis recusandae fugiat! Molestiae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, id dicta? Sit, repellat. Cumque, soluta commodi assumenda atque dignissimos consectetur voluptatum cupiditate nihil, consequuntur sapiente numquam excepturi reiciendis, saepe sunt.</div>
            </div>
        </div>
    </div>
    
  )
}

export default Modal