import React, {useState} from 'react'
import '../styles/createbuttonmenu.css'
import { createPortal } from 'react-dom'
import Modal from '../modal/Modal'

function CreateMenuButton() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='buttonCreateMenu'>
        <button
        onClick={() => setShowModal(true)}
        className='buttonCreate' title='Créer un menu'>
          <i className='bx bx-plus'></i>
        </button>
        {showModal && createPortal(<Modal closeModal={() => setShowModal(false)} />, document.body)}
    </div>
  )
}

export default CreateMenuButton