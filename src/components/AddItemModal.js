import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
// import "../blocks/AddItemModal.css";

export default function AddItemModal({ onClose, isOpen, onAddItem }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, link, weatherType });
  }

  function handleWeatherType(e) {
    setWeatherType(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
      setWeatherType("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New Garment"
      onClick={onClose}
      onSubmit={handleSubmit}
    >
      <div className="modal__labels">
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="modal__label">
          Image
          <input
            className="modal__input"
            type="url"
            name="link"
            minLength="1"
            placeholder="Image Url"
            onChange={handleLink}
            value={link}
          />
        </label>
      </div>
      <p className="modal__paragraph">Select the weather type:</p>
      <div className="modal__keys">
        <div className="modal__key">
          <input
            className="modal__input-key"
            type="radio"
            id="hot"
            value="hot"
            onChange={handleWeatherType}
          />
          <label>Hot</label>
        </div>
        <div className="modal__key">
          <input
            className="modal__input-key"
            type="radio"
            id="warm"
            value="warm"
            onChange={handleWeatherType}
          />
          <label>Warm</label>
        </div>
        <div className="modal__key">
          <input
            className="modal__input-key"
            type="radio"
            id="cold"
            value="cold"
            onChange={handleWeatherType}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
}
