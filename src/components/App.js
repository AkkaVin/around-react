// import logo from './logo.svg';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Form from './Form';
import { useState } from 'react';

const inputListEditProfileForm = [
  {type:"text", id: "name", placeholder: "Name", minLength:"2", maxLength:"40"},
  {type:"text", id: "job", placeholder: "Job", minLength:"2", maxLength:"200"},
];

const inputListAddCardForm = [
  {type:"text", id: "cardTitle", placeholder: "Card title", maxLength:"50"},
  {type:"url", id: "url", placeholder: "Url"},
];

const inputListEditProfileAvatarForm = [
  {type:"url", id: "avatarUrl", placeholder: "Url"},
];


function App() {
  
  const [isEditProfilePopupOpen,  setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen] = useState(false)
  
const handleEditAvatarClick = () => {
    // document.querySelector(".popup_type_profile-avatar-edit").classList.add("popup_opened");
    setEditAvatarPopupOpen(true);

}

const handleEditProfileClick = () => {
    // document.querySelector(".popup_type_profile-edit").classList.add("popup_opened");
    setEditProfilePopupOpen(true)
}

const handleAddPlaceClick = () => {
    // document.querySelector(".popup_type_add-card").classList.add("popup_opened");
    setAddPlacePopupOpen(true)
}
  
const closeAllPopups = () => {
  setEditAvatarPopupOpen(false);
  setEditProfilePopupOpen(false)
  setAddPlacePopupOpen(false)
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
          onCardClick = ""
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
        imageSources= {{ src: '&nbsp;', title: 'Image'}}
        isOpen=""
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

    {/* template */}

      <template className="card-template">
        <li className="card">
          <button
            type="button"
            className="card__remove-btn"
            aria-label="card-like-button"
          ></button>
          <img 
            className="card__image" 
            src="&nbsp;"
            alt="card img"
          />
          <div className="card__title-container">
            <h2 className="card__title">&nbsp;</h2>
            <div className="card__likes-container">
              <button
              type="button"
              className="card__like-btn"
              aria-label="card-like-button"
              ></button>
              <span className="card__likes-count"></span>
            </div>
          </div>
        </li>
      </template>
    </>    
  );
}

export default App;
