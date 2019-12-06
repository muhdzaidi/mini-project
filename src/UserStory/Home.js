import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bee from '../Images/bee.png'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Iteration from './Iteration'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {iterationStatus : "iterationWeek1"};
    }

    getIterationStatus = newIterationStatus => {
        this.setState((state) => {
            return { iterationStatus : newIterationStatus};
        })
    };

    render(){
        const { stories } = this.props;

        return(
            <div className="container home content">
                <Row className="center">
                    <Col><Iteration getIterationStatus={this.getIterationStatus} onClick={this.props.handleClick} /></Col>
                    <h5 className="center topBar">Iteration Status</h5>
                    <Col><Iteration onClick={this.props.handleClick}></Iteration></Col>
                </Row>
            {

                Object.entries(stories).map(story =>  {
                    const currentIteration = this.state.iterationStatus
                    
                    console.log("currentIteration", currentIteration)

                    const iterationTitle = story[0]
                    const iterationContent = story[1]
                    
                    const storyList = iterationContent.length ? (
                        iterationContent.map(story => {
                            if(iterationTitle === currentIteration) {
                                return (
                                    <div className="post card" key={story.usId}>
                                        <Link to= {'/' + story.usId}>
                                            <div className="card-content">
                                                    <img src={bee} alt="bumblebee"/>
                                                    <span className="card-title black-text">{story.usId} | {story.owner}</span>
                                                <h6>{story.title}</h6>
                                                <ProgressBar now={story.progress} label={`${story.progress}%`} />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })
                    ) : (
                        <div className="center">No stories yet</div>
                    )
                    return (
                        <div className="home content">
                            {storyList}
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // let iterationWeek1 = ownProps.match.params.userstory_id
    return {
        stories: state
    }
}

export default connect(mapStateToProps)(Home)