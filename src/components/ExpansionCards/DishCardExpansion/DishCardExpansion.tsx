import '../DishCardExpansion/DishCardExpansion.scss';

const DishCardExpansion = ({
  icon,
  ingredients,
  price,
}: {
  icon: string;
  ingredients: string;
  price: number;
}) => {
  return (
    <div className="dish-container">
      <img className="dish-icon" src={icon} alt="Dish Icon" />
      <p className="dish-ingredients">{ingredients}</p>
      <p className="dish-price">{price}</p>
    </div>
  );
};

export default DishCardExpansion;
