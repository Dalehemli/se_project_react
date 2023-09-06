// import React, { useEffect, useState } from "react";
// import SideBar from "./SideBar";
// import ClothesSection from "./ClothesSection";
// import "../blocks/Profile.css";
// import ItemCard from "./ItemCard";
// import "../blocks/ItemCards.css";
// import { getForecastWeather } from "../utils/weatherApi";

// function Profile({ items, onSelectedCard, onCreateModal }) {
//   return (
//     <div className="profile">
//       <div className="profile__section">
//         <SideBar />
//       </div>
//       <div className="profile__clothes">
//         <ClothesSection cards={items} onCreateModal={onCreateModal} />
//         <section className="cards">
//           <ul className="cards__list">
//             {items.map((card, index) => (
//               <ItemCard
//                 key={index}
//                 item={card}
//                 name={card.name}
//                 onSelectedCard={onSelectedCard}
//                 id={card._id}
//                 weather={card.weather}
//                 link={card.link}
//               />
//             ))}
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import { getForecastWeather } from "../utils/weatherApi";

const Profile = ({
  items,
  onCardClick,
  onAddClick,
  isLoggedIn,
  editClick,
  logoutClick,
  onLike,
  onUnlike,
}) => {
  const [weatherType, setWeatherType] = useState("");
  useEffect(() => {
    getForecastWeather().then((data) => {
      const currentWeatherType = data.weather[0].main;
      setWeatherType(currentWeatherType);
    });
  }, []);

  return (
    <section className="profile">
      <div className="profile__content">
        <SideBar
          isLoggedIn={isLoggedIn}
          editClick={editClick}
          logoutClick={logoutClick}
        />
        <div className="profile__info"></div>
        <ClothesSection
          cards={items}
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          isLoggedIn={isLoggedIn}
          onLike={onLike}
          onUnlike={onUnlike}
          weatherType={weatherType}
        />
      </div>
    </section>
  );
};

export default Profile;
