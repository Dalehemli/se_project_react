import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.filter((option) => {
    // console.log(i);
    return option.day === day && option.type === type;
  });

  const imageSourceUrl = weatherOption[0].url || " ";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}° F</div>
      <img className="weather__image" src={imageSourceUrl} alt="weather"></img>
    </section>
  );
};

export default WeatherCard;
