import React from "react";
import { inputListAddCardForm } from "../settings";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import { useState } from "react";

function AddPlacePopup (props) { 

    const {isOpen,onClose} = props;

    const [inputsState, setInputsState] = useState({
        cardTitle: "",
        url: ""
    })

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
        props.onAddPlaceSubmit({
             name: inputsState.cardTitle,
             link: inputsState.url,
        });
    }

    return (

        <PopupWithForm 
            title="New place"
            name="add-card"
            isOpen  = {isOpen}
            onClose = {onClose}
            onChange = {()=> {}}
        >
            <Form 
                name="add-card"
                buttonLabel = "Save"
                inputList = {inputListAddCardForm}
                inputsState = {inputsState}
                inputsRefs = {{}}
                onChange = {handleChange}
                onSubmit = {handleSubmit}

            />
        </PopupWithForm>

        /* <PopupWithForm 
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
        </PopupWithForm> */
    )

}

export default AddPlacePopup;
