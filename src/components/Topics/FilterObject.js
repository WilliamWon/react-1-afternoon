import React, {Component} from 'react';

class FilterObject extends Component{
    
    constructor(){
        super();
            
        this.state = {
            unfilteredArray: [
                {
                    name: 'Will',
                    age: 25,
                    hobby: 'Ping pong'
                },
                {
                    name: 'John',
                    job: 'Architect',
                },
                {
                    name: 'Julius',
                    age: 90
                },
                {
                    name: 'Porky',
                    nickname: 'Bob'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput:val});
    }

    filterEmployees(prop){
        var unfilteredArray = this.state.unfilteredArray;
        var filteredArray = [];

        for (var i=0; i < unfilteredArray.length; i++){
            if( unfilteredArray[i].hasOwnProperty(prop)){
                filteredArray.push(unfilteredArray[i]);
            }
        }
        this.setState({filteredArray:filteredArray});
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;