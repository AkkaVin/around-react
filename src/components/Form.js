import React from "react";
import Input from "./Input";


class Form extends React.Component {

    render() {

      let formClassName = "form";
      if (this.props.inputList.length === 0)
          formClassName+= " form_type_delete-card";

      let valuesObj = null;
      let refs = null;
      if (this.props.inputsState && Object.keys(this.props.inputsState).length > 0)
        valuesObj = this.props.inputsState;
      else
        refs = this.props.inputsRefs;
      return (
       
        <form 
          action="#" 
          className={formClassName} 
          name="profile-edit-form" 
          noValidate
          onSubmit={this.props.onSubmit}
        >
            
            {   this.props.inputList.map( input =>  {

                return <React.Fragment key = {input.id}>
                    <Input 
                      input = {input}
                      onChange = {this.props.onChange}
                      valueData = {valuesObj ? valuesObj[input.id] : ""}
                      refData = {refs ? refs[input.id] : null}
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