import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bee from '../bee.png'
import { connect } from 'react-redux'

class Home extends Component {
    
    render(){
        const { stories } = this.props;
        console.log(stories)
        const storyList = stories.length ? (
            stories.map(story => {
                return (
                    <div className="post card" key={story.usId}>
                        <img src={bee} alt="bumblebee"/>
                        <div className="card-content">
                                <span className="card-title yellow-text">{story.usId} | {story.title}</span>
                            <p>{story.Questions}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container home">
                <h4 className="center">Interation Status</h4>
                {storyList}
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