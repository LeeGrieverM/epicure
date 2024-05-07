import "../RestaurantCardExpansion/RestaurantCardExpansion.scss";
import filledStar from "../../../assets/icons/fullStar.svg";
import emptyStar from "../../../assets/icons/emptyStar.svg";

const renderStars = (cardStars: number) => {
  const filledStars: number = cardStars > 0 ? cardStars : 0;
  const emptyStars: number = 5 - filledStars;
  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<img src={filledStar} alt="filled-star" key={i} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img src={emptyStar} alt="empty-star" key={filledStars + i} />);
  }
  return stars;
};

const RestaurantCardExpansion = ({
  chef,
  stars,
  dishes,
}: {
  chef: string;
  stars: number;
  dishes: string[];
}) => {
  return (
    <div className="restaurant-chef-stars-container">
      <p className="chef-name">{chef}</p>
      <div className="star-rating-container">{renderStars(stars)}</div>
    </div>
  );
};

export default RestaurantCardExpansion;
