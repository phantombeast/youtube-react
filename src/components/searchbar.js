import React,{Component} from 'react';
//const COmpoenet=React.Componenet;
class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }
        render()
        {
            return(
            <div className="search-bar">
             <input value={this.state.term}
                 onChange={event => this.onInputChange(event.target.value)}/>;

            </div>
            );
            // value : input becomes controlled compo,,
        }

        // onInputChange(ev)
        // {
        //
        //     console.log(ev.target.value);
        // }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange({term});
    }

}

export default SearchBar;

