import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import EditProfilePopup from "./components/EditProfilePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import AddPlacePopup from "./components/AddPlacePopup";
import DeletePopup from "./components/DeletePopup";

function App() {

  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen ] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
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
    />

    <Footer />

    <template id={"element"}>
      <div className={"element"}>
        <button type="submit" className={"element__delete"}></button>
        <img src=" " alt="" className={"element__image"} />
          <div className={"element__info"}>
            <h2 className={"element__paragraph"}></h2>
            <div className={"element__likes"}>
              <button type="button" className={"element__like"}></button>
              <label className={"element__like-info"}>
                <p className={"element__counter"}></p>
              </label>
            </div>
          </div>
      </div>
    </template>

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

  </div>
        </>
  );
}

export default App