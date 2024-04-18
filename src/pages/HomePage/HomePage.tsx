import Header from "../../components/Header/Header"
import homePagePic from '../../assets/images/homepagePic.png'
import './HomePage.scss'

function HomePage() {
  return (
    <div className="home-page-container">
    <Header/>
    <img src={homePagePic} alt='home-page-pic' className="img-container"/>
    </div>
  )
}

export default HomePage
