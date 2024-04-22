import React from "react";
import "./IconMeanings.scss";
import { iconsMeaningData } from "../../data/constants";

function IconMeanings() {
  return (
    <div className="meanings-container">
      <h1 className="meanings-title">THE MEANING OF OUR ICONS</h1>
      <ul className="icons-list-container">
        {iconsMeaningData.map(({ icon, alt, className }) => (
          <li key={alt} className="icon-meaning">
            <img src={icon} alt={alt} className="icon-img"/>
            {className}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IconMeanings;
