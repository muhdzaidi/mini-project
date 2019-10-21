import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Entries extends Component {
    constructor(props){
        super(props)
        this.state= {
            date: null,
            owner: null,
            usId: null,
            title: null,
            question: null,
            note: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
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

                <p className="center">Insert new story details here.</p>

                <div className="input-field center col s6">
                    <form onSubmit= {this.handleSubmit}>
                        <label for="date">Date:</label>
                        <input placeholder="Date" id="date" type="date" className="validate" onChange={this.handleInputChange}/>
                         
                         <label for="first_name">Owner:</label>
                        <input placeholder="Owner" id="owner" type="text" className="validate" onChange={this.handleInputChange}/>
                        
                         <label for="story_id">Story ID:</label>
                        <input placeholder="Story id" id="usId" type="text" className="validate" onChange={this.handleInputChange}/>
                        

                        <label for="title">Title:</label>
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