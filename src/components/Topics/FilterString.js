import React, {Component} from 'react';

class FilterString extends Component{
    
    constructor(){
        super();

        this.state = {
            names: ['William','Jarid','Michael','Hobo','Wat up'],
            userInput: '',
            filteredArray: []
        };
    }
    
    handleChange(val){
        this.setState({userInput:val});
    }
    
    filterStrings(prop){
        var names = this.state.names;
        var filteredArray = names.filter((val,i,arr) => {
            return names[i].includes(prop);
        })
        this.setState({filteredArray:filteredArray});
    }
        
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterStrings(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
            
        ) 
    }
}

export default FilterString;