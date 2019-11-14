import React, { Component } from 'react'
import { set } from 'lodash';
import { Link } from 'react-router-dom';
import validate from 'validate.js';
import InputComponent from './InputComponent';

const fields = {
    date: {initialState: "", label:"Date:", storyFields:"", fieldErrors:"", type:"date"},
    owner: {initialState: "", label:"Owner:", storyFields:"", fieldErrors:"", type:"text"},
    usId: {initialState: "", label:"Story ID:", storyFields:"", fieldErrors:"", type:"text"},
    title: {initialState: "", label:"Title:", storyFields:"", fieldErrors:"", type:"text"},
    question: {initialState: "", label:"Question:", storyFields:"", fieldErrors:"", type:"text"},
    note: {initialState: "", label:"Note:", storyFields:"", fieldErrors:"", type:"text"},
}

const { initialState, storyFields, fieldErrors } = { ...fields }


const constraints = {
    "date.storyFields": {
        presence: {
            allowEmpty : false
        }
    },
    "owner.storyFields": {
        presence: {
            allowEmpty : false
        }
    },
    "usId.storyFields": {
        presence: {
            allowEmpty : false
        }
    },
    "title.storyFields": {
        presence: {
            allowEmpty : false
        }
    }
}

class Entries extends Component {
    constructor(props){
        super(props)
        this.state = {...fields};
    }

    validate() {
        const stateFields = this.state;
        const error = validate(stateFields, constraints)

        const test = {...stateFields};
        Object.keys(error).forEach(key => { 
            const namePair = key.split('.');
            const fieldName = namePair[0];
            set(test, [fieldName, 'fieldErrors'], "");
        })
        this.setState(test)

        if(error){
            const newState = {...stateFields};
            Object.keys(error).forEach(key => { 
                const namePair = key.split('.');
                const fieldName = namePair[0];
                set(newState, [fieldName, 'fieldErrors'], error[key]);
            })
            this.setState(newState);
            return false
        }
        return true
    }
    

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()


        if (isValid) {
            console.log("Data taken, reset field")
            this.setState(fields);
        } else {
            console.log(fieldErrors, "Incomplete form, see error")
        }
    }

    handleInputChange = (event) => {
        const { id, value } = event.target;
        this.setState((prevState) => {
            const prevFieldData = prevState[id];
            return { [id]: { ...prevFieldData, storyFields: value }  };
        });
    }
    
    render () {
        const stateFields = this.state;
        
        return (
            <div className="container">
            <h4 className="center">Input User Story</h4>
                <div className="input-field center col s6">
                    <form id="form" onSubmit= {this.handleSubmit}>

                        {
                            Object.keys(fields).map(key => { 
                                const { label, storyFields, fieldErrors, type } = stateFields[key];
                                return <InputComponent 
                                    label = {label}
                                    error = {fieldErrors}
                                    id = {key}
                                    handleInputChange = {this.handleInputChange}
                                    type = {type}
                                    value = {storyFields}
                                />
                            })

                        }
                        
                        <button className="btn yellow darken-2">Submit</button>
                    </form>
                </div>
            </div>
        ) 
    }
}
export default Entries