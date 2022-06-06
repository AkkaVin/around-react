// import logo from './logo.svg';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Form from './Form';
import { useEffect, useState } from 'react';
import { inputListAddCardForm,
         inputListEditProfileAvatarForm } from "../settings"
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  
  const [isEditProfilePopupOpen,  setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen] = useState(false);
  const [selectedCard,  setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  
useEffect (() => {
  api.getUserInfo()
  .then ( userInfo => {
    setCurrentUser(userInfo)
  })
  .catch (err => console.log(err))
},[])
  
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

const handleUpdateUser = (updatedUser) => {
  api.updateUserInfoTextContent(updatedUser)
    .then (updatedUserInfo => {
      setCurrentUser(updatedUserInfo);
      closeAllPopups();
    })
    .catch (err => console.log(err))
}

const handleUpdateAvatar = (updatedUser) => {
  api.updateUserInfoAvatar(updatedUser)
    .then (updatedUserAvatar => {
      setCurrentUser(updatedUserAvatar);
      closeAllPopups();
    })
    .catch (err => console.log(err))
}

const closeAllPopups = () => {
  setEditAvatarPopupOpen(false);
  setEditProfilePopupOpen(false);
  setAddPlacePopupOpen(false);
  setSelectedCard({});
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup 
          isOpen  = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onUpdateUser = {handleUpdateUser}
      />
      
{/* 
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
      </PopupWithForm> */}
     
      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
      />

      {/*<PopupWithForm 
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
      </PopupWithForm>*/}

      <EditAvatarPopup 
                isOpen  = {isEditAvatarPopupOpen}
                onClose = {closeAllPopups}
                onUpdateAvatar = {handleUpdateAvatar}
      />

      {/* <PopupWithForm 
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
      </PopupWithForm>  */}

    </> 
    </CurrentUserContext.Provider>   
  );
}

export default App;
