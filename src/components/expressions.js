import React, { Component, useEffect } from 'react';
import Timebar from './timebar';


class Expressions extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handler, true);
        setTimeout(() => { this.setState({isVisible : false})}, this.state.hideAfter);
    }
    constructor(props) {
        super(props);
        this.state = {
            id : props.id,
            greater : props.greater,
            isCorrect: props.isCorrect, 
            expressionA: props.expressionA,
            expressionB : props.expressionB,
            showAfter : props.showAfter,
            hideAfter : props.hideAfter,
            isVisible : false
        }
        setTimeout(() => { this.setState({isVisible : true})}, props.showAfter);
    };


    handler = (event) => {
        if (this.state.isVisible) {
        console.log(event)
        if (event.key === "f" && this.state.greater === 0 ){
            this.setState({isCorrect: "true"})
            this.props.updateCount()
        } else if (event.key === "j" && this.state.greater === 1) {
            this.setState({isCorrect: "true"})
            this.props.updateCount()
        } else if (event.key === "j" && this.state.greater === 0) {
            this.setState({isCorrect: "false"})
        } else if (event.key === "f" && this.state.greater === 1) {
            this.setState({isCorrect: "false"})
        }
    }
    };
    render() { 
        const isVisible = this.state.isVisible;
        return isVisible ? <div id={this.state.id}>
                    { isVisible && <Timebar /> }
        
         <div>
            { isVisible && <span>{this.state.expressionA}</span> }
            { isVisible && <span>{this.state.expressionB}</span> }
         </div>
              <div>
                { isVisible && <span>{ this.state.isCorrect}</span> }
              </div>
              <div>
         { isVisible && <label className="btn btn-primary">Press F if RED is Greater</label> }
         { isVisible && <label className="btn btn-primary">Press J if BLUE is Greater</label> }
         </div>
      </div> : <div />;
    }
}
 
export default Expressions;