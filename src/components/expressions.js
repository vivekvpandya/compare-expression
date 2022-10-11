import React, { Component, useEffect } from 'react';
import ArithmeticExpression from './arithmatic-expression';

class Expressions extends Component {
    state = {  
        // either 0th expression is greater of 1st
        greater : 0,
        isCorrect : "choose"
    };
    componentDidMount() {
        document.addEventListener('keydown', this.handler, true);
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
            <div>
            <div>
            <ArithmeticExpression />
            <ArithmeticExpression />
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