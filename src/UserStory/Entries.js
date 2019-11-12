import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import validate from 'validate.js';
import InputComponent from './InputComponent';

const initialState = {
    label: { date:"Date:", owner:"Owner:", usId:"Story ID:", title:"Title:", question:"Question:", note:"Note:"},
    storyFields: { date:"", owner:"", usId:"", title:"", question:"", note:"" },
    fieldErrors: { date:"", owner:"", usId:"", title:"", question:"", note:""  },
    type: { date:"date", text:"text"}
}

const constraints = {
    date: {
        presence: {
            allowEmpty : false
        }
    },
    owner: {
        presence: {
            allowEmpty : false
        }
    },
    usId: {
        presence: {
            allowEmpty : false
        }
    },
    title: {
        presence: {
            allowEmpty : false
        }
    }
}

class Entries extends Component {
    constructor(props){
        super(props)
        this.state = initialState;
    }

    validate() {
        const error = validate(this.state.storyFields, constraints)
        if(error){ 
            this.setState({fieldErrors: error}, () => {
            });
            return false
        }
        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            console.log("Data taken, reset field")
            this.setState(initialState);
        } else {
            console.log(this.state.fieldErrors, "Incomplete form, see error")
        }
    }

    handleInputChange = (event) => {
        const { id, value } = event.target;

        this.setState((prevState) => {
            const { storyFields } = prevState;
            return { storyFields: { ...storyFields,  [id]: value}};
        });
    }
    
    render () {
        return (
             <div className="container">
             <h4 className="center">Input User Story</h4>

            <div className="input-field center col s6">
                <form id="form" onSubmit= {this.handleSubmit}>
                    
                    <InputComponent 
                        label = {this.state.label.date}
                        error = {this.state.fieldErrors.date}
                        id = {Object.keys(this.state.storyFields)[0]}
                        handleInputChange = {this.handleInputChange}
                        type = {this.state.type.date}
                        value = {(this.state.storyFields.date)}
                    />

                    <InputComponent 
                        label = {this.state.label.owner}
                        error = {this.state.fieldErrors.owner}
                        id = {Object.keys(this.state.storyFields)[1]}
                        handleInputChange = {this.handleInputChange}
                        type = {this.state.type.text}
                        value = {(this.state.storyFields.owner)}
                    />

                    <InputComponent 
                        label = {this.state.label.usId}
                        error = {this.state.fieldErrors.usId}
                        id = {Object.keys(this.state.storyFields)[2]}
                        handleInputChange = {this.handleInputChange}
                        type = {this.state.type.text}
                        value = {(this.state.storyFields.usId)}
                    />

                    <InputComponent 
                        label = {this.state.label.title}
                        error = {this.state.fieldErrors.title}
                        id = {Object.keys(this.state.storyFields)[3]}
                        handleInputChange = {this.handleInputChange}
                        type = {this.state.type.text}
                        value = {(this.state.storyFields.title)}
                    />

                    <InputComponent 
                        label = {this.state.label.question}
                        error = {this.state.fieldErrors.question}
                        id = {Object.keys(this.state.storyFields)[4]}
                        handleInputChange = {this.handleInputChange}
                        type = {this.state.type.text}
                        value = {(this.state.storyFields.question)}
                    />

                    <InputComponent 
                        label = {this.state.label.note}
                        error = {this.state.fieldErrors.note}
                        id = {Object.keys(this.state.storyFields)[5]}
                        handleInputChange = {this.handleInputChange}
                        type = {this.state.type.text}
                        value = {(this.state.storyFields.note)}
                    />

                    <button className="btn yellow darken-2">Submit</button>

                </form>
            </div>
        </div>
        ) 
    }
}
export default Entries