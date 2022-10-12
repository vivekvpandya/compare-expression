import React, { Component, useEffect } from 'react';
import Timebar from './timebar';


class Expressions extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handler, true);
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }
    constructor(props) {
        super(props);
        this.state = {
            greater : props.greater,
            isCorrect: props.isCorrect, 
            expressionA: props.expressionA,
            expressionB : props.expressionB,
            wait : props.wait
        }
    }
    getInitialState() {
        return({hidden : "hidden"});
    }

    show() {
        this.setState({hidden : ""});
    }
    handler = (event) => {
        console.log(event)
        if (event.key === "f" && this.state.greater === 0 ){
            this.setState({isCorrect: "true"})
        } else if (event.key === "j" && this.state.greater === 1) {
            this.setState({isCorrect: "true"})
        } else if (event.key === "j" && this.state.greater === 0) {
            this.setState({isCorrect: "false"})
        } else if (event.key === "f" && this.state.greater === 1) {
            this.setState({isCorrect: "false"})
        }
    };
    render() { 
        return (
            <div className={this.state.hidden}>
                        <Timebar />   

            <div>
                <span>{this.state.expressionA}</span>
                <span>{this.state.expressionB}</span>
          </div>
                  <div>
                    <span>{ this.state.isCorrect}</span>
                  </div>
                  <div>
        <label className="btn btn-primary">Press F if RED is Greater</label>
        <label className="btn btn-primary">Press J if BLUE is Greater</label>
        </div>
                  </div>
        );
    }
}
 
export default Expressions;