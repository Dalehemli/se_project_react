import "../blocks/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__container">
      <img
        src={item.link}
        className="card__image"
        onClick={() => onSelectCard(item)}
        alt={`Photo of ${item.name}`}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
