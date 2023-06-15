import React from 'react'
import '../styles/modal.css'
import axios from 'axios'
import $ from 'jquery'
import Loader from '../Loader'

function Modal({closeModal}) {


    // Loader
    const [loading, setLoading] = React.useState(false)

    // Récuperer les values du formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value.trim()
        // Convertion du stock en int
        const stock = parseInt(e.target.stock.value)
        const restaurant = e.target.restaurant.value.trim()

        // Ajouter un menu
        const options = {
            method: 'POST',
            url: 'https://barquett-api.formaterz.fr/api/meals',
            headers: {
                cookie: 'sf_redirect=%257B%2522token%2522%253A%252251ced5%2522%252C%2522route%2522%253A%2522_api_%255C%252Fmeals%257B._format%257D_post%2522%252C%2522method%2522%253A%2522POST%2522%252C%2522controller%2522%253A%2522api_platform.action.placeholder%2522%252C%2522status_code%2522%253A201%252C%2522status_text%2522%253A%2522Created%2522%257D',
                'Content-Type': 'application/json'
              },
            data: {name, stock, restaurant}
        };

        // Loader
        setLoading(true)

        axios.request(options).then(function (response) {
            console.log(response.data);
            if(response.status === 201) {
                $('.msg .success').css('visibility', 'visible')
                $('.msg .success').css('opacity', '1')
                setTimeout(() => {
                    $('.msg .success').css('visibility', 'hidden')
                    $('.msg .success').css('opacity', '0')
                }, 3000)
            }
            setLoading(false)
        }).catch(function (error) {
            console.log(error);
            $('.msg .error').css('visibility', 'visible')
            $('.msg .error').css('opacity', '1')
            setTimeout(() => {
                $('.msg .error').css('visibility', 'hidden')
                $('.msg .error').css('opacity', '0')
            }, 3000)
            setLoading(false)
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
                    <h1>Ajouter votre menu</h1>
                </div>
                <div className="content">
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="formField">
                            <label htmlFor="name">Nom du repas:</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="formField">
                            <label htmlFor="stock" className="stock">Stock:</label>
                            <input type="number" min="1" name="stock" id="stock" />
                        </div>
                        <div className="formField">
                            <label htmlFor="restaurant" className="restaurant">Restaurant:</label>
                            <input type="text" name="restaurant" id="restaurant" />
                        </div>
                        <div className="formField">
                            <button>Ajouter</button>
                        </div>
                        {loading && <Loader />}
                        <div className="msg">
                            <div className="success">
                                <i className='bx bx-check-circle'></i>
                                <span>Menu ajouté avec succès !</span>
                            </div>
                            <div className="error">
                                <i className='bx bx-error-circle'></i>
                                <span>Erreur lors de l'ajout du menu !</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal