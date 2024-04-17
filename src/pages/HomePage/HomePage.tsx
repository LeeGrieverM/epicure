import Header from "../../components/Header"
import homePagePic from '../../assets/images/homepagePic.png'
import {
  Container,
  ImgContainer
} from "./styles"

function HomePage() {
  return (
    <Container>
    <Header/>
    <ImgContainer src={homePagePic} alt='home-page-pic'/>
    </Container>
  )
}

export default HomePage
