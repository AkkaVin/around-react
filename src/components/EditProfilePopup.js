import React, { useEffect, useState } from "react";
import { inputListEditProfileForm } from "../settings";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function EditProfilePopup (props) {
    
    const {isOpen,onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

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