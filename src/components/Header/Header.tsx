import { useState } from "react";
import mainIcon from "../../assets/icons/mainIcon.svg";
import { textButtonsData, iconButtonsData } from "../../data/constants";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track whether the menu is open or closed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state when the hamburger button is clicked
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };
  return (
    <div className="container">
      <button className="hamburger-button" onClick={toggleMenu} />
      <img src={mainIcon} alt="main-logo" className="main-icon" />
      <ul className="titles-container">
        {textButtonsData.map(({ img, className }, index) => (
          <li key={index}>
            <button className={className}>
              <img src={img} alt="text-button" />
            </button>
          </li>
        ))}
      </ul>
      <ul className="icons-container">
        {iconButtonsData.map(({ icon, alt }) => (
          <li key={alt}>
            <button
              className={`logo-container`}
              style={{ backgroundImage: `url(${icon})` }}
            />
          </li>
        ))}
      </ul>
      {isMenuOpen && <HamburgerMenu onClose={closeMenu} />} 
    </div>
  );
}

export default Header;
