import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    date: null,
    owner: null,
    usId: null,
    title: null,
    question: null,
    note: null,

    dateError: "",
    ownerError: "",
    usIdError: "",
    titleError: "",
}

class Entries extends Component {
    constructor(props){
        super(props)
        this.state= {
            initialState
        }
    }

    validate = () => {
        let dateError = ""
        let ownerError = ""
        let usIdError = ""
        let titleError = ""

        if(!this.state.dateError) {
            dateError = "Please choose a date"
        }
        if(!this.state.ownerError) {
            ownerError = "Please provide a name"
        }
        if(!this.state.usIdError) {
            usIdError = "Please enter a Story ID"
        }
        if(!this.state.titleError) {
            titleError = "Please enter a title"
        }

        if(dateError || ownerError || usIdError || titleError){
            this.setState({dateError, ownerError, usIdError, titleError})
            return false;
        }
        
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid){
            console.log("Passed validation")
            this.setState(initialState)
        }
        console.log(this.state)

    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    render () {
        return (
             <div className="container">
            <h4 className="center">Input User Story</h4>

                <div className="input-field center col s6">
                    <form onSubmit= {this.handleSubmit}>
                        <label for="date">Date:</label>
                        <div style={{color:"red"}}>{this.state.dateError}</div>
                        <input placeholder="Date" id="date" type="date" className="validate" onChange={this.handleInputChange}/>
                         
                         <label for="first_name">Owner:</label>
                         <div style={{color:"red"}}>{this.state.ownerError}</div>
                        <input placeholder="Owner" id="owner" type="text" className="validate" onChange={this.handleInputChange}/>
                        
                         <label for="story_id">Story ID:</label>
                         <div style={{color:"red"}}>{this.state.usIdError}</div>
                        <input placeholder="Story id" id="usId" type="text" className="validate" onChange={this.handleInputChange}/>
                        

                        <label for="title">Title:</label>
                        <div style={{color:"red"}}>{this.state.titleError}</div>
                        <input placeholder="Title" id="title" type="text" className="validate" onChange={this.handleInputChange}/>
                        
                        <label for="question">Question:</label>
                        <div style={{color:"red"}}>{this.state.questionError}</div>
                        <textarea placeholder="Question" id="question" className="materialize-textarea" onChange={this.handleInputChange}></textarea>

                        <label for="note">Note:</label>
                        <div style={{color:"red"}}>{this.state.noteError}</div>
                        <textarea placeholder="Note" id="note" className="materialize-textarea" onChange={this.handleInputChange}></textarea>

                        <button className="btn yellow darken-2">
                            Submit
                        </button>

                    </form>
                </div>
        </div>
        ) 
    }
}
export default Entries