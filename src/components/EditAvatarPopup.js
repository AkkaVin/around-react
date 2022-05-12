import React, { useEffect, useRef, useState } from "react";
import { inputListEditProfileAvatarForm } from "../settings";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function EditAvatarPopup (props) {
    
    const {isOpen,onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

    // const {name, setName} = useState('')
    // const {description, setDescription} = useState('')
    // const [inputsState, setInputsState] = useState({
    //     name: "",
    //     description: ""
    // })

    const urlInputRef = useRef('');

    useEffect(() => {
        // console.log (urlInputRef)
        urlInputRef.current.value = currentUser.avatar;
        // console.log (urlInputRef)
    }, [currentUser])

    function handleChange(e) {
     
        // setInputsState({
        //   ...inputsState,
        //   [e.target.name]: e.target.value
        // });
        
        // console.log (inputsState)
    }
    
    function handleSubmit (e) {
        // alert('A obj was submitted: ' + {inputsState});
        e.preventDefault();
        
        console.log (urlInputRef.current.value)
        
        
        // props.onUpdateAvatar({
        //     avatar: urlInputRef.current.value
        // });
    }

    return (
        <PopupWithForm 
            title = "Change profile picture"
            name  = "profile-avatar-edit"
            isOpen  = {isOpen}
            onClose = {onClose}
        >
            <Form 
                name="profile-avatar-edit"
                buttonLabel = "Save"
                inputList = {inputListEditProfileAvatarForm}
                inputsState = {{}}
                inputsRefs = {{
                    avatarUrl: urlInputRef
                }}
                onChange = {handleChange}
                onSubmit = {handleSubmit}

            />
      </PopupWithForm>
    )

}

export default EditAvatarPopup;