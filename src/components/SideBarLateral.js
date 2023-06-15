import React from 'react'
import './styles/sidebarlateral.css'

function SideBarLateral() {
    // Toggle sidebar
    const toggleSideBar = () => {
        const sideBar = document.querySelector('.sidebar')
        sideBar.classList.toggle('active')
    }

  return (
    <>
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Filtrer par:</h3>
            </div>
            <div className="sidebar-body">
                <div className="sidebar-body-item">
                    <h4>Zone:</h4>
                    <div className="checkboxList">
                        <div className="checkboxItem">
                            <div className="formField">
                                <label htmlFor="north">Nord</label>
                                <input type="checkbox" id="north" />
                            </div>
                            <div className="formField">
                                <label htmlFor="east">Est</label>
                                <input type="checkbox" id="east" />
                            </div>
                            <div className="formField">
                                <label htmlFor="south">Sud</label>
                                <input type="checkbox" id="south" />
                            </div>
                            <div className="formField">
                                <label htmlFor="west">Ouest</label>
                                <input type="checkbox" id="west" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='toggleSideBar' onClick={toggleSideBar}><i className='bx bx-chevron-left'></i></button>
        </div>
    </>
  )
}

export default SideBarLateral