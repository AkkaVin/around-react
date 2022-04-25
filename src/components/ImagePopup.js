import React from "react";

class ImagePopup extends React.Component {

    

    render () {
        return (
            <>
                <div className="popup popup_type_image"  >
                    <div className="popup__container popup__container_type-image" >
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="popup-close-button"
                        ></button>
                        <img
                            src={this.props.imageSources.src}
                            alt="full screen img"
                            className="popup__image"
                        />
                        <h2 className="popup__image-title">{this.props.imageSources.title}</h2>
                    </div>
                </div>      
           </>
        );
    }
    
    
}

export default ImagePopup;