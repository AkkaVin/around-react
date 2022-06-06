import React, { useEffect, useRef } from "react";
import { inputListEditProfileAvatarForm } from "../settings";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function EditAvatarPopup (props) {
    
    const {isOpen,onClose} = props;
    const currentUser = React.useContext(CurrentUserContext);

    const urlInputRef = useRef(currentUser.avatar);

    //console.log(urlInputRef)
    // useEffect(() => {
    //     // console.log(currentUser)
    //     if (JSON.stringify(currentUser)!=="{}"){
    //         console.log(currentUser)
    //         urlInputRef.current.value = currentUser.avatar;
    //     }
    //     else    
    //         console.log("empty")
    // }, [currentUser])

    
    function handleSubmit (e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: urlInputRef.current.value
        });
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
                onChange = {()=> {}}
                onSubmit = {handleSubmit}

            />
      </PopupWithForm>
    )
}

export default EditAvatarPopup;