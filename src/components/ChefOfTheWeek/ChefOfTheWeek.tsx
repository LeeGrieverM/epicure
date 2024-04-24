import "./ChefOfTheWeek.scss";

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
    <div className="chef-of-the-week-container">
      <h1 className="chef-of-the-week-title">{title}</h1>
      <div className="img-text-container">
        <img className='chef-img' src={img} alt={chefName}/>
        <p className="chef-of-the-week-text">{text}</p>
      </div>
    </div>
  );
};

export default ChefOfTheWeek;
