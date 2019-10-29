import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import validate from 'validate.js'

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

const constraints = {
    date: {
        presence:true,
    },
    owner: {
        presence:true,
    },
    usId: {
        presence:true,
    },
    title: {
        presence:true,
    }
}

class Entries extends Component {
    constructor(props){
        super(props)
        this.state = {
            initialState
        }
    }

    validate() {
        const error = validate({date: this.state.date, owner: this.state.owner, usId: this.state.usId, title: this.state.title}, constraints)

        if(error){ 
            this.setState({
                dateError: error.date,
                ownerError: error.owner,
                usIdError: error.usId,
                titleError: error.title
            })
            return false
        }
        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            console.log("data taken, reset fields")
            this.setState(initialState)
            console.log(this.state.date, this.state.owner, this.state.ownerError)
        } else {
            console.log(this.state.error, "Incomplete form, see error")
        }
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
                    <form id="form" onSubmit= {this.handleSubmit}>
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
                        <textarea placeholder="Question" id="question" className="materialize-textarea" onChange={this.handleInputChange}></textarea>

                        <label for="note">Note:</label>
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