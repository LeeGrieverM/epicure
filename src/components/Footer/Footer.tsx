import "./Footer.scss";
import { footerButtonsData } from "../../data/constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-buttons-list">
        {footerButtonsData.map(({ title, alt }) => (
          <li key={alt}>
            <button className={`footer-button`}>{title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
