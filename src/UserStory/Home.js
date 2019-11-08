import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Home extends Component {
    
    render(){
        const { stories } = this.props;

        const storyList = stories.length ? (
            stories.map(story => {
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
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container home content">
                <h5 className="center">Interation Status</h5>
                {storyList}
                <h5 className="center">Color Chart</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}

export default connect(mapStateToProps)(Home)