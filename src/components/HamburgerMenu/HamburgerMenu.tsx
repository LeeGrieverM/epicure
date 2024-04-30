import "./HamburgerMenu.scss";
import { footerButtonsData, hamburgerButtons } from "../../data/constants";
import ButtonsList from "../ButtonsList/ButtonsList";

const HamburgerMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="hamburger-menu-container">
      <div className="top-hamburger-container">
        <button className="close-button" onClick={onClose}>
        </button>
      </div>
      <div className="middle-hamburger-container">
        <ButtonsList buttonsData={hamburgerButtons}/>
      </div>
      <hr className="separator" />
      <div className="bottom-hamburger-container">
        <ButtonsList buttonsData={footerButtonsData}/>
      </div>
    </div>
  );
};

export default HamburgerMenu;
