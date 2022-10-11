import React, { Component } from 'react';

class ArithmeticExpression extends Component {
    state = {  expression : " 6 + 2 " };
    render() { 
        return (<h1>{ this.state.expression }</h1>);
    }
}
 
export default ArithmeticExpression;