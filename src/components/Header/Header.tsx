import mainIcon from "../../assets/icons/mainIcon.svg";
import { textButtonsData, iconButtonsData } from "../../data/constants";
import "./Header.scss";

function Header() {
  return (
    <div className="container">
      <button className="hamburger-button" />
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
    </div>
  );
}

export default Header;
