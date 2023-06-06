import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useMemo } from "react";
import "../blocks/Main.css";

function Main({ weatherTemp, onSelectCard }) {
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

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp}° F/ You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
