import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/home-page.css'
import Card from '../components/Card'
import SideBarLateral from '../components/SideBarLateral'
import axios from 'axios'
import CreateMenuButton from '../components/button/CreateMenuButton'
import ButtonViewPlus from '../components/button/ButtonViewPlus'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function HomePage() {
  document.title = "Miam miam's - Accueil"
  const [menu, setMenu] = useState([])
  const [refresh, setRefresh] = useState(false)

  // Récupérer les menus
  const getMenus = async () => {
    const options = { method: 'GET', url: 'https://barquett-api.formaterz.fr/api/meals?page=2' };

    axios.request(options).then(function (response) {
      setMenu(response.data['hydra:member'])
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    getMenus()
  }, [refresh])

  return (
    <>
      <div className="navigation">
        <ReactNotifications />
        <Navbar />
      </div>
      <header>
        <div className="header-content">
          <h1>Nos selections du jour</h1>
          <div className="gridContainer">
            {menu.map((menu) => {
              return (
                <Card menu={menu} key={menu.id} setRefresh={setRefresh} refresh={refresh}/>
              )
            })}
          </div>
        </div>
      </header>
      <div className="sideBarLat">
        <SideBarLateral />
      </div>
      <div className="addMenuButton">
        <CreateMenuButton />
      </div>
      <div className="viewButton">
        <ButtonViewPlus />
      </div>
    </>
  )
}

export default HomePage