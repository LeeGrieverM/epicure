import "./SearchBar.scss";
import { text } from "../../data/constants";
import homePagePic from "../../assets/images/homepagePic.png";
import searchIcon from "../../assets/icons/searchIcon.svg";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";

function SearchBar() {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <div className="search-area-container">
      <img src={homePagePic} alt="home-page-pic" className="img-container" />
      <div className="search-bar-container">
        <Slide direction="up">
          <h1 className="search-title">{text.searchBarTitle}</h1>
        </Slide>
        <div className="search-input-container">
          <img
            src={searchIcon}
            alt="search-icon"
            className={`search-icon ${isTyping ? "spin" : ""}`}
          />
          <input
            type="text"
            placeholder={text.searchBarPlaceHolder}
            className="search-input"
            onFocus={handleTyping}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
