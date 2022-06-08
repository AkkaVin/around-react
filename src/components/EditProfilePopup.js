import React, { useEffect, useState } from "react";
import { inputListEditProfileForm } from "../settings";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function EditProfilePopup (props) {
    
    const {isOpen,onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

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

    function handleChange(e) {
     
        setInputsState({
          ...inputsState,
          [e.target.name]: e.target.value
        });
    }
    
    function handleSubmit (e) {
        e.preventDefault();
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
            <Form 
                name="profile-edit"
                buttonLabel = "Save"
                inputList = {inputListEditProfileForm}
                inputsState = {inputsState}
                inputsRefs = {{}}
                onChange = {handleChange}
                onSubmit = {handleSubmit}
            />
      </PopupWithForm>
    )

}

export default EditProfilePopup;