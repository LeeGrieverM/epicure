import "../DishCardExpansion/DishCardExpansion.scss";
import shekelIcon from "../../../assets/icons/shekelIcon.svg";

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
      <div className="dish-price-container">
        <img className="shekel-icon" src={shekelIcon} alt="shekel" />
        <p className="dish-price">{price}</p>
      </div>
    </div>
  );
};

export default DishCardExpansion;
