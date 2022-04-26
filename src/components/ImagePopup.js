import React from "react";

class ImagePopup extends React.Component {

    render () {
        
        let popupClassName = "popup popup_type_image";
        if (this.props.card)  popupClassName+=" popup_opened" 
        
        return (
            <>
                <div className={popupClassName}  >
                    <div className="popup__container popup__container_type-image" >
                        <button
                            onClick={this.props.onClose}
                            type="button"
                            className="popup__close-btn"
                            aria-label="popup-close-button"
                        ></button>
                        <img
                            src={this.props.card ? this.props.card.link: "$nbsp"}
                            alt="full screen img"
                            className="popup__image"
                        />
                        <h2 className="popup__image-title">{this.props.card.name}</h2>
                    </div>
                </div>      
           </>
        );
    }
    
    
}

export default ImagePopup;