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
                   
         <div className='row exp'>
            { isVisible && <Timebar /> }
            { isVisible && <h2 className='col md-6 red'>{this.state.expressionA}</h2> }
            { isVisible && <h2 className='col md-6 blue'>{this.state.expressionB}</h2> }
            { isVisible && <span>{ this.state.isCorrect}</span> }

         { isVisible && <label >Press F if RED is Greater</label> }
         { isVisible && <label >Press J if BLUE is Greater</label> }
         </div>
      </div> : <div />;
    }
}
 
export default Expressions;