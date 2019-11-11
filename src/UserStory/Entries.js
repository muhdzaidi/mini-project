import React, { Component } from 'react'
import { connect } from 'react-redux'
import validate from 'validate.js'
import { addStory } from './Actions/addStory'


const initialState = {
    storyFields: { date:"", owner:"", usId:"", title:"", question:"", note:"" },
    fieldErrors: { dateError:"", ownerError:"", usIdError:"", titleError:"" }
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
            let newEntry =  {usId: this.state.storyFields.usId, owner:this.state.storyFields.owner, title: this.state.storyFields.title, Questions: this.state.storyFields.question, note:this.state.storyFields.note, progress:0}
            this.props.addStory(newEntry)

            this.setState(initialState);
        } else {
            console.log(this.state.error, "Incomplete form, see error")
        }
    }

    handleInputChange = (event) => {
        const { id, value } = event.target;
        this.setState((prevState) => {
            const { storyFields, fieldErrors } = prevState;
            return { storyFields: { ...storyFields,  [id]: value}, fieldErrors:{ ...fieldErrors, [id]: value}};
        });
    }
    
    render () {
        return (
            <div className="container content">
            <h5 className="center">Input User Story</h5>

                <div className="input-field center col s6">
                    <form id="form" onSubmit= {this.handleSubmit}>
                        <label for="date">Date:</label>
                        {this.state.dateError && <div style={{color:"red"}}>{this.state.dateError}</div> }
                        <input placeholder="Date" id="date" type="date" className="validate" onInput={this.handleInputChange} value={this.state.storyFields.date}/>
                         
                         <label for="first_name">Owner:</label>
                         {this.state.ownerError && <div style={{color:"red"}}>{this.state.ownerError}</div> }
                        <input placeholder="Owner" id="owner" type="text" className="validate" onInput={this.handleInputChange} value={this.state.storyFields.owner}/>
                        
                         <label for="story_id">Story ID:</label>
                         {this.state.usIdError && <div style={{color:"red"}}>{this.state.usIdError}</div> }
                        <input placeholder="Story id" id="usId" type="text" className="validate" onInput={this.handleInputChange} value={this.state.storyFields.usId}/>
                        
                        <label for="title">Title:</label>
                        {this.state.titleError && <div style={{color:"red"}}>{this.state.titleError}</div>}
                        <input placeholder="Title" id="title" type="text" className="validate" onInput={this.handleInputChange} value={this.state.storyFields.title}/>
                        
                        <label for="question">Question:</label>
                        <textarea placeholder="Question" id="question" className="materialize-textarea" onInput={this.handleInputChange} value={this.state.storyFields.question} ></textarea>

                        <label for="note">Note:</label>
                        <textarea placeholder="Note" id="note" className="materialize-textarea" onInput={this.handleInputChange} value={this.state.storyFields.note} ></textarea>

                        <button className="btn yellow darken-2">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStory: (newEntry) => { dispatch(addStory(newEntry)) }
    }
}

export default connect(null, mapDispatchToProps)(Entries)