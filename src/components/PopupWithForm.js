import React from "react";

class PopupWithForm extends React.Component {

    

    render () {
        console.log(this.props.children)
        return (
            <>
                <div className="popup popup_type_profile-avatar-edit">
                    <div className="popup__container">
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="popup-close-button"
                        ></button>
                        <h2 className="popup__title">{this.props.title}</h2>
                        <form action="#" className="form" name={this.props.formName} noValidate>
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
           </>
        );
    }
    
    
}

export default PopupWithForm;