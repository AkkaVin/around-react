import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

class Card extends React.Component {
    
    static contextType = CurrentUserContext;


    handleClick = () => {
        this.props.onCardClick(this.props.card);
    }  
    
    handleLikeClick = () => {
        this.props.onCardLike(this.props.card);
    }

    handleDeleteClick = () => {
        this.props.onCardDelete(this.props.card);
    }

    render() {

        const  isOwn = this.props.card.owner._id === this.context._id;
        const isLiked = this.props.card.likes.some (user => 
            user._id === this.context._id
        );

        let cardRemoveButton = "card__remove-btn"
        if (isOwn) 
            cardRemoveButton += " card__remove-btn_visible"
       
        let cardLikeButton = "card__like-btn"
        if (isLiked) 
            cardLikeButton += " card__like-btn_active"

        return (
            <li className="card">
                <button
                    onClick={this.handleDeleteClick}
                    type="button"
                    className={cardRemoveButton}
                    aria-label="card-remove-button"
                ></button>
                <img 
                    onClick={this.handleClick}
                    className="card__image" 
                    src={this.props.card.link}
                    alt="card img"
                />
                <div className="card__title-container">
                    <h2 className="card__title">{this.props.card.name}</h2>
                    <div className="card__likes-container">
                        <button
                            type="button"
                            className={cardLikeButton}
                            aria-label="card-like-button"
                            onClick={this.handleLikeClick}
                        ></button>
                        <span className="card__likes-count">{this.props.card.likes.length}</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default Card;