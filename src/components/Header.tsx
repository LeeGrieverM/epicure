import React from 'react'
import mainIcon from '../assets/icons/mainIcon.svg'
import searchIcon from '../assets/icons/searchIcon.svg'
import personIcon from '../assets/icons/personIcon.svg'
import shoppingBagIcon from '../assets/icons/shoppingBagIcon.svg'
import {
    LogoContainer,
    Container,
    IconsContainer,
    HamburgerButton,
} from './styles'

function Header() {
  return (
    <Container>
        <HamburgerButton/>
        <LogoContainer src={mainIcon} alt='main-logo'/>
        <IconsContainer>
        <LogoContainer src={searchIcon} alt='shopping-bag'/>
        <LogoContainer src={personIcon} alt='shopping-bag'/>
        <LogoContainer src={shoppingBagIcon} alt='shopping-bag'/>
        </IconsContainer>
    </Container>
  )
}

export default Header
