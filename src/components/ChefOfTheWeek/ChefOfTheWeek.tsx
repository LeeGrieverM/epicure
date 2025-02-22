import "./ChefOfTheWeek.scss";
import { Fade } from "react-awesome-reveal";

const ChefOfTheWeek = ({
  title,
  chefName,
  text,
  img,
}: {
  title: string;
  chefName: string;
  text: string;
  img: string;
}) => {
  return (
    <Fade>
      <div className="chef-of-the-week-container">
        <h1 className="chef-of-the-week-title">{title}</h1>
        <div className="img-text-container">
          <div className="chef-img-container">
            <img className="chef-img" src={img} alt={chefName} />
            <div className="chef-name-on-img">{chefName}</div>
          </div>
          <p className="chef-of-the-week-text">{text}</p>
        </div>
      </div>
    </Fade>
  );
};

export default ChefOfTheWeek;
