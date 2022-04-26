import { findRenderedComponentWithType } from "react-dom/test-utils";

const inputListEditProfileForm = [
    {type:"text", id: "name", placeholder: "Name", minLength:"2", maxLength:"40"},
    {type:"text", id: "job", placeholder: "Job", minLength:"2", maxLength:"200"},
  ];
  
  const inputListAddCardForm = [
    {type:"text", id: "cardTitle", placeholder: "Card title", maxLength:"50"},
    {type:"url", id: "url", placeholder: "Url"},
  ];
  
  const inputListEditProfileAvatarForm = [
    {type:"url", id: "avatarUrl", placeholder: "Url"},
  ];

  
  export { inputListEditProfileForm ,inputListAddCardForm , inputListEditProfileAvatarForm }