import React from "react";

class Card extends React.Component {
    
    handleClick = () => {
        this.props.onCardClick(this.props.card);
    }  
    
    render() {
        // console.log(this.props)
        return (
            <li className="card">
                <button
                    type="button"
                    className="card__remove-btn"
                    aria-label="card-like-button"
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
                            className="card__like-btn"
                            aria-label="card-like-button"
                        ></button>
                        <span className="card__likes-count">{this.props.card.likes.length}</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default Card;