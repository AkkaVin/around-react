import React from "react";
import { api } from "../utils/Api";
import Card from "./Card"
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main (props) {

    const currentUser = React.useContext(CurrentUserContext)
    // const [userName,  setUserName] = useState('')    
    // const [userDescription,  setUserDescription] = useState('')
    // const [userAvatar,  setUserAvatar] = useState('')
    const [cards,  setCards] = useState([])

    useEffect(() => {
        api.getInitialCards()
        .then( cardInitlData => {
            setCards(cardInitlData);
        })
        .catch (err => console.log(err))
    }, []);

    const cardList = cards.map ( card => {
        return <Card 
            key = {card._id}
            card = {card}
            onCardClick = {props.onCardClick}
        />
    })


    return (
        <>
            <main>
            <section className="profile">
            <div className="profile__avatar-container" onClick={props.onEditAvatarClick}>
            {currentUser.avatar && 
                <img
                    className="profile__avatar"
                    src={currentUser.avatar}
                    alt="avatar"
                />
            }
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                    type="button"
                    className="profile__edit-btn"
                    aria-label="profile-edit-button"
                    onClick={props.onEditProfileClick}
                ></button>
                <p className="profile__job">{currentUser.about}</p>
            </div>
            <button
                type="button"
                className="profile__add-card-btn"
                aria-label="profile-add-card-button"
                onClick={props.onAddPlaceClick}
            ></button>
            </section>
            <section className="cards">
            <ul className="cards__container">
                {cardList}
            </ul>
            </section>
            </main>
        </>
    );
    
}

export default Main;