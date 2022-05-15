import React from "react";

class Input extends React.Component {
    
    
    render () {
        console.log(this.props.valueData)
        if (this.props.valueData)   
            return (
                <input
                    value = {this.props.valueData || ""}
                    type = {this.props.input.type}
                    id = {`${this.props.input.id}-input`}
                    className= {`form__input form__input_type_${this.props.input.id}`}
                    name = {this.props.input.id}
                    placeholder = {this.props.input.placeholder}
                    minLength = {this.props.input.minLength }
                    maxLength = {this.props.input.maxLength }
                    required = {true}
                    onChange = {this.props.onChange}
                />
            )
        else
            return (
                <input
                    ref = {this.props.refData}
                    type = {this.props.input.type}
                    id = {`${this.props.input.id}-input`}
                    className= {`form__input form__input_type_${this.props.input.id}`}
                    name = {this.props.input.id}
                    placeholder = {this.props.input.placeholder}
                    minLength = {this.props.input.minLength }
                    maxLength = {this.props.input.maxLength }
                    required = {true}
                    onChange = {this.props.onChange}
                />
            )
    } 
}

export default Input;