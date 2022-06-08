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
    }

    function handleSubmit (e) {
        e.preventDefault();
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
    )
}

export default AddPlacePopup;
