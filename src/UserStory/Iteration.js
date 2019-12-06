import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'

class Iteration extends Component {
    constructor(props) {
        super(props);

        this.state = { pos: 0 };
    }

    handleClick = (e) => {
        let iterationWeek = Object.keys(this.props.stories)
        const { id } = e.target
        const { pos } = this.state;
        const { stories } = this.props;
        const storiesArray = Object.keys(stories);
        
        let nextPos = pos
        if(id === "right" && pos < iterationWeek.length - 1) {
            nextPos += 1;
            this.setState({ pos: nextPos });
        } else if (id === "left" && pos > 0){
            nextPos -= 1;
            this.setState({ pos: nextPos })
        }
        this.props.getIterationStatus(storiesArray[nextPos]);
    }

    render(){
        const iterationStatus = Object.keys(this.props.stories)[this.state.pos];
        
        return (
            <div className="topBar">
                <Row className="justify-content-md-center">
                    <button className="arrow" id="left" onClick = {this.handleClick}>
                        &#8249;
                    </button>
                    <p class="content-bg center iterationBar">{iterationStatus}</p>
                    <button className="arrow" id="right" onClick = {this.handleClick}>
                       &#8250;
                    </button>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state
    }
}

export default connect(mapStateToProps)(Iteration)