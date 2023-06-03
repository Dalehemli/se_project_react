import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ModalWithForm from "./ModalWithForm.js";
import ItemModal from "./ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";

function App() {
  return (
    <div>
      <header></header>
    </div>
  );
}

export default App;
