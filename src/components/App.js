// import logo from './logo.svg';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="main-page">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="popup popup_type_profile-edit">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="popup-close-button"
          ></button>
          <h2 className="popup__title">Edit profile</h2>
          <form action="#" className="form" name="profile-edit-form" noValidate>
            <input
              type="text"
              id="name-input"
              className="form__input form__input_type_name"
              name="name"
              placeholder="name"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="name-input-error" className="form__error">&nbsp;</span>
            <input
              type="text"
              id="job-input"
              className="form__input form__input_type_job"
              name="job"
              placeholder="job"
              minLength="2"
              maxLength="200"
              required
            />
            <span id="job-input-error" className="form__error">&nbsp;</span>
            <button type="submit" className="form__save-btn">Save</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="popup-close-button"
          ></button>
          <h2 className="popup__title">New place</h2>
          <form action="#" className="form" name="add-card-form" noValidate>
            <input
              type="text"
              id="cardTitle-input"
              className="form__input form__input_type_card-title"
              name="cardTitle"
              placeholder="Card title"
              maxLength="50"
              required
            />
            <span id="cardTitle-input-error" className="form__error">&nbsp;</span>
            <input
              type="url"
              id="url-input"
              className="form__input form__input_type_url"
              name="url"
              placeholder="Url"
              required
            />
            <span id="url-input-error" className="form__error">&nbsp;</span>
            <button type="submit" className="form__save-btn">Create</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type-image">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="popup-close-button"
          ></button>
          <img
            src="&nbsp;"
            alt="full screen img"
            className="popup__image"
          />
          <h2 className="popup__image-title">Image</h2>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="popup-close-button"
          ></button>
          <h2 className="popup__title">Are you sure?</h2>
          <form action="#" className="form form_type_delete-card" name="delete-card-form" noValidate>
            <button type="submit" className="form__save-btn">Yes</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_profile-avatar-edit">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="popup-close-button"
          ></button>
          <h2 className="popup__title">Change profile picture</h2>
          <form action="#" className="form" name="profile-avatar-edit-form" noValidate>
            <input
              type="url"
              id="url-profile-input"
              className="form__input form__input_type_url"
              name="url"
              placeholder="Url"
              required
            />
            <span id="url-profile-input-error" className="form__error">&nbsp;</span>
            <button type="submit" className="form__save-btn">Save</button>
          </form>
        </div>
      </div>


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