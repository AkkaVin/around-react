// import logo from './logo.svg';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Form from './Form';
import { useState } from 'react';
import { inputListEditProfileForm,
         inputListAddCardForm,
         inputListEditProfileAvatarForm } from "../settings"

function App() {
  
  const [isEditProfilePopupOpen,  setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen] = useState(false)
  const [selectedCard,  setSelectedCard] = useState('')
  
  
const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
}

const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true)
}

const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true)
}

const handleCardClick = (card) => {
  setSelectedCard(card)
}

const closeAllPopups = () => {
  setEditAvatarPopupOpen(false);
  setEditProfilePopupOpen(false);
  setAddPlacePopupOpen(false);
  setSelectedCard('');
}

  return (
    <>
      {/* page */}

      <div className="main-page">
        <Header />
        <Main 
          onEditProfileClick = {handleEditProfileClick}
          onAddPlaceClick = {handleAddPlaceClick}
          onEditAvatarClick = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
      </div>

      {/* popups */}

      <PopupWithForm 
        title = "Edit profile"
        name  = "profile-edit"
        isOpen  = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      >
        <Form 
          name="profile-edit"
          buttonLabel = "Save"
          inputList = {inputListEditProfileForm}
        />
      </PopupWithForm>

      <PopupWithForm
       title="Are you sure?"
       name="delete-card"
       isOpen=""
       onClose = {closeAllPopups}
      >
        <Form 
          name="delete-card"
          buttonLabel = "Yes"
          inputList = {[]}
        />
      </PopupWithForm>
     
      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
      />

      <PopupWithForm 
        title="New place"
        name="add-card"
        isOpen ={isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      >
        <Form 
          name="add-card"
          buttonLabel = "Save"
          inputList = {inputListAddCardForm}
        />
      </PopupWithForm>

      <PopupWithForm 
        title="Change profile picture"
        name="profile-avatar-edit"
        isOpen= {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      >
        <Form 
          name="profile-avatar-edit"
          buttonLabel = "Save"
          inputList = {inputListEditProfileAvatarForm}
        />
      </PopupWithForm>

    </>    
  );
}

export default App;
