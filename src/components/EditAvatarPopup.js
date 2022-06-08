import React, { useEffect, useRef } from "react";
import { inputListEditProfileAvatarForm } from "../settings";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup (props) {
    
    const {isOpen,onClose} = props;
    const avatarInputProps = inputListEditProfileAvatarForm[0];
    const currentUser = React.useContext(CurrentUserContext);

    const urlInputRef = useRef(currentUser.avatar);

    useEffect(() => {
             urlInputRef.current.value = currentUser.avatar;
    }, [currentUser])

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
            <form 
                action="#" 
                className="form" 
                name="profile-edit-form" 
                noValidate
                onSubmit={handleSubmit}
            >
                <input
                    ref = {urlInputRef}
                    type = {avatarInputProps.type}
                    id = {`${avatarInputProps.id}-input`}
                    className= {`form__input form__input_type_${avatarInputProps.id}`}
                    name = {avatarInputProps.id}
                    placeholder = {avatarInputProps.placeholder}
                    minLength = {avatarInputProps.minLength }
                    maxLength = {avatarInputProps.maxLength }
                    required = {true}
                />
                <span id={`${avatarInputProps.id}-input-error`} className="form__error">&nbsp;</span>
                <button type="submit" className="form__save-btn">Save</button>
            </form>
      </PopupWithForm>
    )
}

export default EditAvatarPopup;