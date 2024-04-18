import Header from "../../components/Header/Header";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import IconMeanings from "../../components/IconMeanings/IconMeanings";

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <SearchBar />
      <IconMeanings/>
    </div>
  );
}

export default HomePage;
