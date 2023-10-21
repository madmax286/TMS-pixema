import React from 'react'
import {ReactComponent as HomeIcon} from '../../icons/Home.svg'
import {ReactComponent as TrendsIcon} from '../../icons/Trends.svg'
import {ReactComponent as FavoritesIcon} from '../../icons/Favorites.svg'
import {ReactComponent as SettingsIcon} from '../../icons/Settings.svg'
import LogoIcon from '../../icons/Logo.svg'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu__wrapper'>
      <div className="menu__logo">
        <img src={LogoIcon} alt="pixema" />
      </div>
      <div className="menu__link menu__home">
        <HomeIcon className='home-icon' />
        <span>Home</span>
      </div>
      <div className="menu__link menu__trends">
      <TrendsIcon className='trends-icon' />
        <span>Trends</span>
      </div>
      <div className="menu__link menu__favorites">
      <FavoritesIcon className='favorites-icon' />
        <span>Favorites</span>
      </div>
      <div className="menu__link menu__settings">
      <SettingsIcon className='settings-icon' />
        <span>Settings</span>
      </div>
      <span className='rights-reserved'>© All Rights Reserved</span>
    </div>
  )
}

export default Menu
