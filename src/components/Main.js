// import WeatherCard from "./WeatherCard";
// import ItemCard from "./ItemCard";
// import "../blocks/Main.css";
// import React, { useContext, useMemo } from "react";
// import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
// import { temperature } from "../utils/weatherApi";

// function Main({
//   weatherTemp,
//   onSelectedCard,
//   clothingItems,
//   onLike,
//   isLoggedIn,
// }) {
//   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
//   const weatherType = useMemo(() => {
//     if (weatherTemp >= 86) {
//       return "hot";
//     } else if (weatherTemp >= 66 && weatherTemp <= 85) {
//       return "warm";
//     } else if (weatherTemp <= 65) {
//       return "cold";
//     }
//   }, [weatherTemp]);

//   const currentTemp = temperature(weatherTemp);
//   const currentTempString = currentTemp[currentTemperatureUnit];

//   const filteredCards = clothingItems.filter((card) => {
//     return card.weather.toLowerCase() === weatherType;
//   });

//   return (
//     <main className="main">
//       <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
//       <section className="card__section" id="card-section">
//         Today is {currentTempString} / You may want to wear:
//         <div className="card__items">
//           {filteredCards?.map((card) => (
//             <ItemCard
//               key={card._id}
//               item={card}
//               onSelectedCard={onSelectedCard}
//               name={card.name}
//               weather={card.weather}
//               id={card.id}
//               link={card.link}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Main;

import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../components/WeatherCard";
import ItemCard from "./ItemCard";
import { temperature } from "../utils/weatherApi";
import "../blocks/Main.css";
import "../blocks/Card.css";

function Main({
  onLike,
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();
  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];
  // Filter clothingItems based on weather temperature
  const filteredClothingItems = clothingItems.filter((item) => {
    // Assuming each item has a property 'minTemperature' and 'maxTemperature'
    const minTemp = item.minTemperature;
    const maxTemp = item.maxTemperature;

    return weatherTemp >= minTemp && weatherTemp <= maxTemp;
  });

  return (
    <main className="main">
      <div className="main__container">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />

        <section className="main__clothing">
          <p className="main__text">
            Today is {currentTempString} / You may want to wear:
          </p>

          <ul className="main__cards">
            {Array.isArray(filteredClothingItems) &&
              filteredClothingItems.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                  onLike={onLike}
                  isLoggedIn={isLoggedIn}
                />
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Main;
