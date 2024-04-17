import Header from "../../components/Header/Header"
import homePagePic from '../../assets/images/homepagePic.png'
import {
  Container,
  ImgContainer
} from "./styles"

function HomePage() {
  return (
    <Container>
    <Header/>
    <ImgContainer src={homePagePic} alt='home-page-pic'></ImgContainer>
    </Container>
  )
}

export default HomePage
