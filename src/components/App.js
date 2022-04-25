// import logo from './logo.svg';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Form from './Form';

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
  
  
  
  
  return (
    <>
      {/* page */}

      <div className="main-page">
        <Header />
        <Main />
        <Footer />
      </div>

      {/* popups */}

      <PopupWithForm 
        title="Edit profile"
        name="profile-edit"
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
      >
        <Form 
          name="delete-card"
          buttonLabel = "Yes"
          inputList = {[]}
        />
      </PopupWithForm>
     
      <ImagePopup
        imageSources= {{ src: '&nbsp;', title: 'Image'}}
      />

      <PopupWithForm 
        title="New place"
        name="add-card"
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
