import "../Card/Card.scss";
import { CardData } from "../../types/types";

const Card = ({ card }: { card: CardData }) => {
  return (
    <div className="card-container">
      <div className="top-card-container">
        <img src={card.image} alt={card.title} className="card-image" />
      </div>
      <div className="bottom-card-container">
        <h1 className="card-title">{card.title}</h1>
        {card.expansionComponent}
      </div>
    </div>
  );
};

export default Card;
