import "../blocks/App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Profile from "./Profile";
import Footer from "./Footer.js";
// import ModalWithForm from "./ModalWithForm.js";
import ItemModal from "./ItemModal";
import { defaultClothingItems } from "../utils/constants";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemModal from "./AddItemModal";
import "../blocks/Page.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleOpenConfirmModal = () => {
    setActiveModal("delete");
  };

  const handleCloseConfirmModal = () => {
    setActiveModal("");
  };

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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItem = ({ name, link, weatherType }) => {
    api
      .addItems({ name, link, weather: weatherType })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (id) => {
    api
      .deleteItems(id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => card._id !== id);
        setClothingItems(filteredCards);
        handleCloseModal();
        handleCloseConfirmModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <BrowserRouter>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} temp={temp} />
        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <Main
                weatherTemp={temp}
                clothingItems={clothingItems}
                onSelectedCard={handleSelectedCard}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                items={clothingItems}
                onSelectedCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
              />
            }
          />
        </Routes>
        <Footer />
        {activeModal === "preview" && (
          <ItemModal
            itemData={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleOpenConfirmModal}
            handleOpenConfirmModal={handleOpenConfirmModal}
          />
        )}
        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onCreateModal={handleCreateModal}
            onAddItem={handleAddItem}
          />
        )}
        {activeModal === "delete" && (
          <DeleteConfirmModal
            handleDeleteItem={() => handleDeleteItem(selectedCard._id)}
            handleCloseConfirmModal={handleCloseConfirmModal}
            selectedCard={selectedCard}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}

export default App;
