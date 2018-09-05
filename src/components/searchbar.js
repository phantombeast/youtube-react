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
            <div>
             <input value={this.state.term}
                 onChange={event => this.setState({term:event.target.value})}/>;

            </div>
            );
            // value : input becomes controlled compo,,
        }

        // onInputChange(ev)
        // {
        //
        //     console.log(ev.target.value);
        // }

}

export default SearchBar;

