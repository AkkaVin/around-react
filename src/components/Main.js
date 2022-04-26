import React from "react";
import { api } from "../utils/Api";
import Card from "./Card"

class Main extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            userName: '',
            userDescription: '',
            userAvatar: '',
            cards: [],
        };
    }
    
    componentDidMount (){
        Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cardInitlData, userInfo]) => {
            this.setState({userName: userInfo.name});
            this.setState({userAvatar: userInfo.avatar});
            this.setState({userDescription: userInfo.about});

            this.setState({cards: cardInitlData});
        })
        .catch (err => console.log(err))
    }
    render () {
        // console.log(this.props)

        const cards = this.state.cards.map ( (card, i) => {
            // console.log(card)
            return <Card 
                key = {i}
                card = {card}
                onCardClick = {this.props.onCardClick}
            />
        })
        return (
            <>
                <main>
                <section className="profile">
                <div className="profile__avatar-container" onClick={this.props.onEditAvatarClick}>
                    <img
                        className="profile__avatar"
                        src={this.state.userAvatar}
                        alt="avatar"
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{this.state.userName}</h1>
                    <button
                        type="button"
                        className="profile__edit-btn"
                        aria-label="profile-edit-button"
                        onClick={this.props.onEditProfileClick}
                    ></button>
                    <p className="profile__job">{this.state.userDescription}</p>
                </div>
                <button
                    type="button"
                    className="profile__add-card-btn"
                    aria-label="profile-add-card-button"
                    onClick={this.props.onAddPlaceClick}
                ></button>
                </section>
                <section className="cards">
                <ul className="cards__container">
                 {cards}
                </ul>
                </section>
                </main>
           </>
        );
    }
    
    
}

export default Main;