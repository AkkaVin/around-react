import React from "react";

class PopupWithForm extends React.Component {

    

    render () {
        // console.log(this.props)
        // console.log(this.props.children)
        return (
            <>
                <div className={`popup popup_type_${this.props.name}` }  >
                {/* popup_opened */}
                    <div className="popup__container" >
                        <button
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