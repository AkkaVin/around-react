import React from "react";
import { api } from "../utils/Api";

class Main extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            userName: "&nbsp;",
            userDescription: "&nbsp;",
            userAvatar: "&nbsp;",
        };
    }
    
    componentDidMount (){
        api.getUserInfo()
        .then( res => {
            this.setState({userName: res.name});
            this.setState({userAvatar: res.avatar});
            this.setState({userDescription: res.about});
        })
        .catch (err => console.log(err))
    }
    render () {
        // console.log(this.props)
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
                <ul className="cards__container"></ul>
                </section>
                </main>
           </>
        );
    }
    
    
}

export default Main;