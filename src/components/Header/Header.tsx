import React from 'react'
import mainIcon from '../../assets/icons/mainIcon.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'
import personIcon from '../../assets/icons/personIcon.svg'
import shoppingBagIcon from '../../assets/icons/shoppingBagIcon.svg'
import './Header.scss'

function Header() {
  return (
    <div className="container">
        <button className="hamburger-button"/>
        <img src={mainIcon} alt='main-logo' className="main-icon"/>
        <ul className='icons-container'>
          <li>
          <img src={searchIcon} alt='shopping-bag' className="logo-container"/>
          </li>
          <li>
          <img src={personIcon} alt='shopping-bag' className="logo-container"/>
          </li>
          <li>
          <img src={shoppingBagIcon} alt='shopping-bag' className="logo-container"/>
          </li>
        </ul>
    </div>
  )
}

export default Header
