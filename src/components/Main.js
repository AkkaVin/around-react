import React from "react";

class Main extends React.Component {

    handleEditAvatarClick = () => {
        document.querySelector(".popup_type_profile-avatar-edit").classList.add("popup_opened");
    }

    handleEditProfileClick = () => {
        document.querySelector(".popup_type_profile-edit").classList.add("popup_opened");
    }

    handleAddPlaceClick = () => {
        document.querySelector(".popup_type_add-card").classList.add("popup_opened");
    }
    
    render () {
        return (
            <>
                <main>
                <section className="profile">
                <div className="profile__avatar-container" onClick={this.handleEditAvatarClick}>
                    <img
                        className="profile__avatar"
                        src="&nbsp;"
                        alt="avatar"
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">&nbsp;</h1>
                    <button
                        type="button"
                        className="profile__edit-btn"
                        aria-label="profile-edit-button"
                        onClick={this.handleEditProfileClick}
                    ></button>
                    <p className="profile__job">&nbsp;</p>
                </div>
                <button
                    type="button"
                    className="profile__add-card-btn"
                    aria-label="profile-add-card-button"
                    onClick={this.handleAddPlaceClick}
                ></button>
                </section>
                <section className="cards">
                <ul className="cards__container"></ul>
                </section>
                </main>
           </>
        );
    }
    
    
}

export default Main;