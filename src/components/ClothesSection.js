import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/Profile.css";

const ClothesSection = ({
  cards,
  onCardClick,
  onAddClick,
  isLoggedIn,
  onLike,
  onUnlike,
  weatherType, // New prop for weather type
}) => {
  const currentUser = useContext(CurrentUserContext);

  // Filter cards based on the current weather type
  const filteredCards = cards.filter((card) => card?.owner === currentUser._id);

  return (
    <div className="profile__container">
      <div className="profile__subcontainer">
        <p className="profile__title">Your items</p>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Add"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="profile__cards">
        {filteredCards.length === 0 ? (
          <div>No items to display</div>
        ) : (
          filteredCards.map((card) => (
            <ItemCard
              key={card._id}
              item={card}
              onSelectCard={onCardClick}
              onLike={onLike}
              onUnlike={onUnlike}
              isLoggedIn={isLoggedIn}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ClothesSection;
