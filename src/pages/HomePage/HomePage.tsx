import Header from "../../components/Header/Header"
import './HomePage.scss'
import SearchBar from "../../components/SearchBar/SearchBar"

function HomePage() {
  return (
    <div className="home-page-container">
    <Header/>
    <SearchBar/>
    </div>
  )
}

export default HomePage
