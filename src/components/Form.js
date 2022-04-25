import React from "react";

// const inputList = [
//     {type:"text", id: "name", placeholder: "Name", minLength:"2", maxLength:"40"},
//     {type:"text", id: "job", placeholder: "Job", minLength:"2", maxLength:"200"},
// ];

class Form extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {value: ''};
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }
  

    render() {

    let formClassName = "form";
    if (this.props.inputList.length === 0)
        formClassName+= " form_type_delete-card";

      return (
        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Name:
        //     <input type="text" value={this.state.value} onChange={this.handleChange} />
        //   </label>
        //   <input type="submit" value="Submit" />
        // </form>
        
        <form action="#" className={formClassName} name="profile-edit-form" noValidate>
            
            {   this.props.inputList.map( (input) => {

                return < >
                    <input 
                        // key = {input.id}
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
                </>
            })}
            <button type="submit" className="form__save-btn">{this.props.buttonLabel}</button>
        </form>

      );
    }
  }

  export default Form;