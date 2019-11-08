import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStory } from './Actions/deleteStory'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SingleStory extends Component {

    handleClick = () => {
        this.props.deletestory(this.props.story.usId)
        this.props.history.push('/');
    }

    render(){
        const { story } = this.props
        
        return (
            {story} ? (
                <div className="container content content-bg">

                    <Row>
                        <Col><h4 className="left">{this.props.story.usId} | {this.props.story.owner}</h4></Col>
                        <Col><h4 className="right">{this.props.story.title}</h4></Col>
                    </Row>                        

                    <p className="center">{this.props.story.Questions}</p>
                    <p className="center">{this.props.story.note}</p>
                    
                    <ProgressBar now={this.props.story.progress} label={`${this.props.story.progress}%`}/>
    
                    <div className="center">
                        <button className="btn grey" onClick = {this.handleClick}>
                            Delete story
                        </button>
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
      story: state.stories.find(story => story.usId === id)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStory: (usId) => { dispatch(deleteStory(usId)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleStory)