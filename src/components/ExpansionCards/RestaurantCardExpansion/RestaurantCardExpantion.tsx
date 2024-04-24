import '../RestaurantCardExpansion/RestaurantCardExpansion.scss';

const RestaurantCardExpansion = ({
  chef,
  stars,
}: {
  chef: string;
  stars: number;
}) => {
  return (
    <div className="restaurant-chef-stars-container">
      <p className="chef-name">{chef}</p>
      <p className="chef-name">STARS: {stars}</p>
    </div>
  );
};

export default RestaurantCardExpansion;
