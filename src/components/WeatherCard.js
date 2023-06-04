// import "../blocks/WeatherCard.css";
// import Sunny from "../images/day/Sunny.svg";
// import Cloudy from "../images/day/Cloudy.svg";
// import Rain from "../images/day/Rain.svg";
// import Storm from "../images/day/Storm.svg";
// import Snow from "../images/day/Snow.svg";
// import Fog from "../images/day/Fog.svg";
// import SunnyNight from "../images/night/SunnyNight.svg";
// import CloudyNight from "../images/night/CloudyNight.svg";
// import RainyNight from "../images/night/RainNight.svg";
// import StormNight from "../images/night/StormNight.svg";
// import SnowNight from "../images/night/SnowNight.svg";
// import FogNight from "../images/night/FogNight.svg";

// const weatherOptions = [
//   { url: Sunny, day: true, type: "sunny" },
//   { url: Cloudy, day: true, type: "cloudy" },
//   { url: Rain, day: true, type: "rain" },
//   { url: Storm, day: true, type: "storm" },
//   { url: Snow, day: true, type: "snow" },
//   { url: Fog, day: true, type: "fog" },
//   { url: SunnyNight, day: false, type: "sunny" },
//   { url: CloudyNight, day: false, type: "cloudy" },
//   { url: RainyNight, day: false, type: "rain" },
//   { url: StormNight, day: false, type: "storm" },
//   { url: SnowNight, day: false, type: "snow" },
//   { url: FogNight, day: false, type: "fog" },
// ];

// const WeatherCard = ({ day, type, weatherTemp = "" }) => {
//   const imageSrc = weatherOptions.filter((i) => {
//     console.log(i);
//     return i.day === day && i.type === type;
//   });

//   const imageSourceUrl = imageSrc[0].url || " ";
//   return (
//     <section className="weather" id="weather">
//       <div className="weather__info">{weatherTemp} F</div>
//       <img
//         className="weather__image"
//         src={imageSourceUrl}
//         alt="weather image"
//       ></img>
//     </section>
//   );
// };

// export default WeatherCard;
