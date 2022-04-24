import React from "react";

class PopupWithForm extends React.Component {

    

    render () {
        // console.log(this.props)
        // console.log(this.props.children)
        // console.log(!this.props.imageSources)
        return (
            <>
                <div className={`popup popup_type_${this.props.name}`}  >
                    <div 
                        className={
                            !this.props.imageSources ? "popup__container": "popup__container popup__container_type-image"
                        }
                    >
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="popup-close-button"
                        ></button>
                        {   !this.props.imageSources ?
                                <h2 className="popup__title">{this.props.title}</h2>
                            :
                                <>
                                    <img
                                        src={this.props.imageSources.src}
                                        alt="full screen img"
                                        className="popup__image"
                                    />
                                    <h2 className="popup__image-title">{this.props.imageSources.title}</h2>
                                </>
                        }
                        {/* form here */}
                        {this.props.children}   
                    </div>
                </div>      
           </>
        );
    }
    
    
}

export default PopupWithForm;