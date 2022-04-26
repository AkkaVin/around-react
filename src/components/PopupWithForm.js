import React from "react";

class PopupWithForm extends React.Component {


    render () {
        let popupClassName = `popup popup_type_${this.props.name}`;
        if (this.props.isOpen)  popupClassName+=" popup_opened" 

        return (
            <>
                <div className={popupClassName}  >
                    <div className="popup__container" >
                        <button onClick={this.props.onClose}
                            type="button"
                            className="popup__close-btn"
                            aria-label="popup-close-button"
                        ></button>
                        <h2 className="popup__title">{this.props.title}</h2>
                        {/* form here */}
                        {this.props.children}   
                    </div>
                </div>      
           </>
        );
    }
}

export default PopupWithForm;