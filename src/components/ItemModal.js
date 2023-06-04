import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="item__modal-image" src={selectedCard.link} alt="item" />
        <div className="item__modal-caption">
          <div>{selectedCard.name}</div>
          <div>{selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
