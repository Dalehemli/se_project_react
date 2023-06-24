import "../blocks/ModalWithForm.css";
import closeButton from "../images/close.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClick,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button type="button" className="modal__button-close" onClick={onClick}>
          <img src={closeButton} alt="close button" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__button-submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
