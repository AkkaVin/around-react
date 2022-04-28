import React from "react";

class Form extends React.Component {

    render() {

    let formClassName = "form";
    if (this.props.inputList.length === 0)
        formClassName+= " form_type_delete-card";

      return (
       
        <form action="#" className={formClassName} name="profile-edit-form" noValidate>
            
            {   this.props.inputList.map( (input, i) => {

                return <React.Fragment key = {input.id}>
                    <input 
                        type = {input.type}
                        id = {`${input.id}-input`}
                        className= {`form__input form__input_type_${input.id}`}
                        name = {input.id}
                        placeholder = {input.placeholder}
                        minLength = {input.minLength }
                        maxLength = {input.maxLength }
                        required = {true}
                    />
                    <span id={`${input.id}-input-error`} className="form__error">&nbsp;</span>
                  </React.Fragment>
            })}
            <button type="submit" className="form__save-btn">{this.props.buttonLabel}</button>
        </form>

      );
    }
  }

  export default Form;