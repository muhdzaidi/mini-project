import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStory } from './Actions/deleteStory'
import ProgressBar from 'react-bootstrap/ProgressBar'


class SingleStory extends Component {

    handleClick = () => {
        this.props.deleteStory(this.props.story.usId)
        this.props.history.push('/');
    }

    render(){
        const { story } = this.props
        
        return (
            {story} ? (
                <div className="container content content-bg">
                <h4 className="center">{this.props.story.usId} | {this.props.story.owner}</h4>

                    <div>
                        <h4 className="center">{this.props.story.title}</h4>

                        <p className="center">{this.props.story.Questions}</p>
                        <p className="center">{this.props.story.note}</p>
                        
                        <ProgressBar now={this.props.story.progress} label={`${this.props.story.progress}%`}/>

                        <div className="center">
                            <button className="btn yellow darken-2" onClick = {this.handleClick}>
                                Delete story
                            </button>
                        </div> 
                    </div>
                </div>
            ) : (
                <div className="center">Loading story...</div>
            )
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.userstory_id
  return {
      story: state.iterationWeek1.find(story => story.usId === id)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStory: (usId) => { dispatch(deleteStory(usId)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleStory)