import "./Footer.scss";
import ButtonsList from "../ButtonsList/ButtonsList";
import { footerButtonsData } from "../../data/constants";

const Footer = () => {
  return (
    <div className="footer-container">
     <ButtonsList buttonsData={footerButtonsData}/>
    </div>
  );
};

export default Footer;
