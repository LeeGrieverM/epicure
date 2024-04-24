import "./ChefOfTheWeek.scss";

const ChefOfTheWeek = ({
  title,
  chefName,
  text,
  desktopImg,
  mobileImg,
}: {
  title: string;
  chefName: string;
  text: string;
  desktopImg: string;
  mobileImg: string;
}) => {
  return (
    <div className="chef-of-the-week-container">
      <h1 className="chef-of-the-week-title">{title}</h1>
      <div className="img-text-container">
        <img className='chef-img-desktop' src={desktopImg} alt={chefName}/>
        <img className='chef-img-mobile' src={mobileImg} alt={chefName}/>
        <p className="chef-of-the-week-text">{text}</p>
      </div>
    </div>
  );
};

export default ChefOfTheWeek;
