import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletestory } from './Actions/deleteStory'

class story extends Component {

    handleClick = () => {
        this.props.deletestory(this.props.story.id)
        this.props.history.push('/');
    }

    render(){
        console.log(this.props)
        const story = this.props.story ? (
            <div className="story">
                <h4 className="center">{this.props.story.title}</h4>
                <p>{this.props.story.body}</p>
                <div className="center">
                    <button className="btn grey" onClick = {this.handleClick}>
                        Delete story
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading story...</div>
        )
        
        return (
            <div className="container">
                { story }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.story_id
  return {
      story: state.stories.find(story => story.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletestory: (id) => { dispatch(deletestory(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(story)