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
import AddPlacePopup from './AddPlacePopup';

function App() {
  
  const [isEditProfilePopupOpen,  setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen] = useState(false);
  const [selectedCard,  setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards,  setCards] = useState([])
  
useEffect (() => {
  api.getUserInfo()
  .then ( userInfo => {
    setCurrentUser(userInfo)
  })
  .catch (err => console.log(err))
},[])

useEffect(() => {
  api.getInitialCards()
  .then( cardInitlData => {
      setCards(cardInitlData);
  })
  .catch (err => console.log(err))
}, []);
  
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

function handleAddPlaceSubmit (card) {
  api.createCard(card)
    .then (newCard => {
      setCards([newCard, ...cards]); 
      closeAllPopups();
    })
    .catch (err => console.log(err))
}


function handleCardLike(card) {
  // Check one more time if this card was already liked
  const isLiked = card.likes.some(
      user => user._id === currentUser._id
  );
  // Send a request to the API and getting the updated card data
  const action = isLiked ? 'unlikeCard': 'likeCard';
  api[action](card._id)
  .then((updatedCard) => {
      setCards(
          (state) => 
          state.map((currentCard) => 
              currentCard._id === card._id ? updatedCard : currentCard
          )
      );
  })
  .catch (err => console.log(err));
} 

function  handleCardDelete (card)    {
  api.deleteCard(card._id)
  .then( () => {
      setCards(
          cards.filter(
              currentCard => currentCard._id !== card._id
      ))
  })
  .catch (err => console.log(err));
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
          cards = {cards}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
        />
        <Footer />
      </div>

      {/* popups */}

      <EditProfilePopup 
          isOpen  = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onUpdateUser = {handleUpdateUser}
      />
      
      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
      />

      <AddPlacePopup 
          isOpen  = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onAddPlaceSubmit = {handleAddPlaceSubmit}
      />
      
      
      {/* <PopupWithForm 
        title="New place"
        name="add-card"
        isOpen ={isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        onChange = {()=> {}}
      >
        <Form 
          name="add-card"
          buttonLabel = "Save"
          inputList = {inputListAddCardForm}
          inputsRefs = {{}}
        />
      </PopupWithForm> */}

      <EditAvatarPopup 
                isOpen  = {isEditAvatarPopupOpen}
                onClose = {closeAllPopups}
                onUpdateAvatar = {handleUpdateAvatar}
      />

    </> 
    </CurrentUserContext.Provider>   
  );
}

export default App;
