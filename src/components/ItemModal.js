import "../blocks/ItemModal.css";
import closeButton from "../images/close.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_preview">
        <button className="modal__button-close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
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
