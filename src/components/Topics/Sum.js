import React, {Component} from 'react';

class Sum extends Component{

    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    numChange1(val){
        this.setState({number1: +val});
    }

    numChange2(val){
        this.setState({number2: +val});
    }

    addition(num1,num2){
        return this.setState({sum:num1+num2});
    }

    render(){
        return(
           <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.numChange1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.numChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.addition(this.state.number1,this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
           </div>
        )
    }
}

export default Sum;