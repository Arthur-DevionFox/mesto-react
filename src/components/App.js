import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePopup from "./DeletePopup";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen ] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [card, setCard] = React.useState(null)


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setCard(null)
  }


   function handleEditAvatarClick() {
     setIsEditAvatarPopupOpen(true)
  }

   function handleEditProfileClick() {
     setIsEditProfilePopupOpen(true)
  }

   function handleAddPlaceClick() {
     setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setCard(card)
  }

  function closeByClick(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    if (isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen,]);



  return (
      <>
  <div className={"page"}>
    <Header />

    <Main
        onEditProfile = {handleEditProfileClick}
        onAvatarPlace = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
    />

    <Footer />

    <EditProfilePopup
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        onCloseClick = {closeByClick}
    />

    <EditAvatarPopup
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        onCloseClick = {closeByClick}
    />

    <AddPlacePopup
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        onCloseClick = {closeByClick}
    />

    <DeletePopup />

    <ImagePopup
      card = {card}
      onClose = {closeAllPopups}
      onCloseClick = {closeByClick}
    />

  </div>
        </>
  );
}

export default App