import React, { useEffect, useState } from "react";
import { inputListEditProfileForm } from "../settings";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function EditProfilePopup (props) {
    
    const {isOpen,onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

    /**
     * 
      let formClassName = "form";
      if (this.props.inputList.length === 0)
          formClassName+= " form_type_delete-card";

      let valuesObj = null;
      let refs = null;
      if (this.props.inputsState && Object.keys(this.props.inputsState).length > 0)
        valuesObj = this.props.inputsState;
      else
        refs = this.props.inputsRefs; 
     
    */
 
    // const {name, setName} = useState('')
    // const {description, setDescription} = useState('')
    const [inputsState, setInputsState] = useState({
        name: "",
        description: ""
    })

    useEffect(() => {
        setInputsState({
            name: currentUser.name,
            description: currentUser.about
        })
    }, [currentUser])
    // }, [currentUser])

    function handleChange(e) {
     
        setInputsState({
          ...inputsState,
          [e.target.name]: e.target.value
        });
        // console.log (inputsState)
    }
    
    function handleSubmit (e) {
        // alert('A obj was submitted: ' + {inputsState});
        e.preventDefault();
        // console.log (inputsState)
        props.onUpdateUser({
            name: inputsState.name,
            about: inputsState.description,
        });
    }

    return (
        <PopupWithForm 
            title = "Edit profile"
            name  = "profile-edit"
            isOpen  = {isOpen}
            onClose = {onClose}
        >
            {/* <Form 
                name="profile-edit"
                buttonLabel = "Save"
                inputList = {inputListEditProfileForm}
                inputsState = {inputsState}
                inputsRefs = {{}}
                onChange = {handleChange}
                onSubmit = {handleSubmit}

            /> */}
            <form 
                action="#" 
                className="form" 
                name="profile-edit-form" 
                noValidate
                onSubmit={handleSubmit}
            >
                
                {   inputListEditProfileForm.map( input =>  {

                    return <React.Fragment key = {input.id}>
                        <input
                            value = {inputsState[input.id]}
                            // ref = {refs[input.id]}
                            type = {input.type}
                            id = {`${input.id}-input`}
                            className= {`form__input form__input_type_${input.id}`}
                            name = {input.id}
                            placeholder = {input.placeholder}
                            minLength = {input.minLength }
                            maxLength = {input.maxLength }
                            required = {true}
                            onChange = {handleChange}
                        />
                        <span id={`${input.id}-input-error`} className="form__error">&nbsp;</span>
                    </React.Fragment>
                })}
                <button type="submit" className="form__save-btn">Save</button>
            </form>
      </PopupWithForm>
    )

}

export default EditProfilePopup;