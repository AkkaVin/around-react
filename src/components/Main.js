import React from "react";

class Main extends React.Component {

    render () {
        // console.log(this.props)
        return (
            <>
                <main>
                <section className="profile">
                <div className="profile__avatar-container" onClick={this.props.onEditAvatarClick}>
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
                        onClick={this.props.onEditProfileClick}
                    ></button>
                    <p className="profile__job">&nbsp;</p>
                </div>
                <button
                    type="button"
                    className="profile__add-card-btn"
                    aria-label="profile-add-card-button"
                    onClick={this.props.onAddPlaceClick}
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