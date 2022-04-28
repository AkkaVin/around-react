import React from "react";
import { api } from "../utils/Api";
import Card from "./Card"
import { useEffect, useState } from "react";

function Main (props) {

    const [userName,  setUserName] = useState('')    
    const [userDescription,  setUserDescription] = useState('')
    const [userAvatar,  setUserAvatar] = useState('')
    const [cards,  setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cardInitlData, userInfo]) => {
     
            setUserName(userInfo.name);
            setUserAvatar(userInfo.avatar);
            setUserDescription(userInfo.about);
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
            {userAvatar && 
                <img
                    className="profile__avatar"
                    src={userAvatar}
                    alt="avatar"
                />
            }
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button
                    type="button"
                    className="profile__edit-btn"
                    aria-label="profile-edit-button"
                    onClick={props.onEditProfileClick}
                ></button>
                <p className="profile__job">{userDescription}</p>
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