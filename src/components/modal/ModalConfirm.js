import React from 'react'
import '../styles/modalconfirm.css'

function ModalConfirm({deleteMenu, closeModal}) {
  return (
    <div className='msgConfirmWrapper'>
      <div className="overlay"></div>
      <div className="content">
      <div className="closeButton">
        <button className="close">
          <i className='bx bx-x'></i>
        </button>
      </div>
      <h1>Êtes-vous sûr de vouloir supprimer ce menu ?</h1>
      <div className="callToAction">
        <button className="cancel" onClick={closeModal}>Annuler</button>
        <button className="confirm" onClick={() => {
          deleteMenu()
          closeModal()
          setTimeout(() => {
            document.location.reload()
          }, 4000);
        }}>Confirmer</button>
      </div>
      </div>
    </div>
  )
}

export default ModalConfirm