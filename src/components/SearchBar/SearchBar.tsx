import "./SearchBar.scss";
import { text } from "../../data/constants";
import homePagePic from "../../assets/images/homepagePic.png";
import searchIcon from "../../assets/icons/searchIcon.svg";

function SearchBar() {
  return (
    <div className="search-area-container">
      <img src={homePagePic} alt="home-page-pic" className="img-container" />
      <div className="search-bar-container">
        <h1 className="search-title">{text.searchBarTitle}</h1>
        <div className="search-input-container">
          <img src={searchIcon} alt="search-icon" className="search-icon" />
          <input
            type="text"
            placeholder={text.searchBarPlaceHolder}
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
