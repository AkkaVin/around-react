import React from "react";

class Main extends React.Component {

    render () {
        return (
            <>
                <main>
                <section className="profile">
                <div className="profile__avatar-container">
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
                    ></button>
                    <p className="profile__job">&nbsp;</p>
                </div>
                <button
                    type="button"
                    className="profile__add-card-btn"
                    aria-label="profile-add-card-button"
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