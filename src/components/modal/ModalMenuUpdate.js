import React, { useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import Loader from '../Loader'

function ModalMenuUpdate({ closeModal, menuUpdate}) {

    // Loader
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [restaurant, setRestaurant] = useState('')

    // Function pour modifier un menu dans l'api
    const updateMenu = async (e) => {
        e.preventDefault()
        const options = {
            method: 'PUT',
            url: `https://barquett-api.formaterz.fr/api/meals/${menuUpdate.id}`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                name: name,
                stock: parseInt(stock),
                restaurant: restaurant
            }
        };

        // Loader
        setLoading(true)

        axios.request(options).then(function (response) {
            if(response.status === 200) {
                $('.msg .success').css('visibility', 'visible')
                $('.msg .success').css('opacity', '1')
                setTimeout(() => {
                    $('.msg .success').css('visibility', 'hidden')
                    $('.msg .success').css('opacity', '0')
                }, 3000)
            }
            setLoading(false)
            setTimeout(() => {
                closeModal()
            }, 4000);
        }).catch(function (error) {
            $('.msg .error').css('visibility', 'visible')
            $('.msg .error').css('opacity', '1')
            setTimeout(() => {
                $('.msg .error').css('visibility', 'hidden')
                $('.msg .error').css('opacity', '0')
            }, 3000)
            setLoading(false)
            setTimeout(() => {
                closeModal()
            }, 4000);
        });
    }

    return (
        <div className='container'>
            <div className="overlay"></div>
            <div className='wrapper'>
                <button className="close" onClick={closeModal}>
                    <i className='bx bx-x'></i>
                </button>
                <div className="header">
                    <h1>Mettez a jour le menu</h1>
                </div>
                <div className="content">
                    <form action="#" onSubmit={updateMenu}>
                        <div className="formField">
                            <label htmlFor="name">Nom du menu:</label>
                            <input type="text" name="name" id="name" onChange={
                                (e) => {
                                    setName(e.target.value)
                                }
                            }
                            />
                        </div>
                        <div className="formField">
                            <label htmlFor="stock" className="stock">Stock:</label>
                            <input type="number" min="1" name="stock" id="stock" onChange={
                                (e) => {
                                    setStock(e.target.value)
                                }
                            } />
                        </div>
                        <div className="formField">
                            <label htmlFor="restaurant" className="restaurant">Restaurant:</label>
                            <input type="text" name="restaurant" id="restaurant" onChange={
                                (e) => {
                                    setRestaurant(e.target.value)
                                }
                            } />
                        </div>
                        <div className="formField">
                            <button>Valider</button>
                        </div>
                        {loading && <Loader />}
                        <div className="msg">
                            <div className="success">
                                <i className='bx bx-check-circle'></i>
                                <span>Menu modifié avec succès !</span>
                            </div>
                            <div className="error">
                                <i className='bx bx-error-circle'></i>
                                <span>Erreur lors de la modification du menu !</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalMenuUpdate