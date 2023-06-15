import React, { useState } from 'react'
import imgMenu from '../assets/images/menu/repasImg.jpg'
import './styles/card.css'
import { createPortal } from 'react-dom'
import ModalMenuUpdate from './modal/ModalMenuUpdate'
import axios from 'axios'
import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ModalConfirm from './modal/ModalConfirm'

function Card({menu, setRefresh, refresh}) {

    const [showModalMenuUpdate, setShowModalMenuUpdate] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    // Transférer l'id du menu à modifier dans le modal
    const [menuUpdate, setMenuUpdate] = useState(menu)

    // Supprimer un menu
    const deleteMenu = async () => {
        const options = {
            method: 'DELETE',
            url: `https://barquett-api.formaterz.fr/api/meals/${menu.id}`,
        };

        axios.request(options).then(function (response) {
            console.log(response);
            Store.addNotification({
                title: "Suppression",
                message: "Le menu a bien été supprimé",
                type: "success",
                insert: "top",
                container: "top-right",
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }
            })
        }).catch(function (error) {
            console.error(error);
        });
        setRefresh(!refresh)
    }
    return (
        <div className='gridItem'>
            <div className="overlay"></div>
            <img src={imgMenu} alt="" />
            <div className="gridItemContent">
                <div className="header">
                    <h3>
                        {menu.name}
                    </h3>
                    <div className="mentions">
                        <span className="ingredients">
                            <ul>
                                <li>Oignons</li>
                                <li>Tomates</li>
                                <li>Poulet</li>
                                <li>Pomme de terre</li>
                            </ul>
                        </span>
                        <hr />
                        <div className="location">
                            <span className="location-icon">
                                <i className='bx bx-store-alt'></i>
                            </span>
                            <span className="location-text">
                                {
                                    menu.restaurant.length > 10 ? menu.restaurant.substring(0, 10) + '...' :
                                        menu.restaurant
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <p className="price">Prix: 15€</p>
                    <p className='stock'>Stock: <span>{menu.stock}</span></p>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <div className="buttonGroup">
                        <button onClick={() => setShowModalMenuUpdate(true)}>Modifier</button>
                        {showModalMenuUpdate && createPortal(
                            <ModalMenuUpdate menuUpdate={menuUpdate} setMenuUpdate={setMenuUpdate} closeModal={() => setShowModalMenuUpdate(false)} />, document.body)
                        }
                        <button onClick={
                            () => {
                                setShowModalConfirm(true)
                            }
                        }>Supprimer</button>
                        {showModalConfirm && createPortal(
                            <ModalConfirm deleteMenu={deleteMenu} closeModal={() => setShowModalConfirm(false)} />, document.body
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card