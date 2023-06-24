import "../blocks/App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Profile from "./Profile";
import Footer from "./Footer.js";
import ModalWithForm from "./ModalWithForm.js";
import ItemModal from "./ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import "../blocks/Page.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page__wrapper">
      <div className="page">
        <Header onCreateModal={handleCreateModal} temp={temp} />
        <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            buttonText="Add Garment"
            title="New Garment"
            onClose={handleCloseModal}
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
                />
              </label>
              <label className="modal__label">
                Image
                <input
                  className="modal__input"
                  type="url"
                  name="link"
                  minLength="1"
                  maxLength="30"
                  placeholder="Image URL"
                />
              </label>
              <p className="modal__paragraph">Select the weather type:</p>
              <div className="modal__buttons">
                <div className="modal__button">
                  <input
                    className="modal__button-input"
                    type="radio"
                    id="hot"
                    value="hot"
                    name="weather"
                  />
                  <label>Hot</label>
                </div>
                <div className="modal__button">
                  <input
                    className="modal__button-input"
                    type="radio"
                    id="warm"
                    value="warm"
                    name="weather"
                  />
                  <label>Warm</label>
                </div>
                <div className="modal__button">
                  <input
                    className="modal__button-input"
                    type="radio"
                    id="cold"
                    value="cold"
                    name="weather"
                  />
                  <label>Cold</label>
                </div>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
        ;
      </div>
    </div>
  );
}

export default App;
