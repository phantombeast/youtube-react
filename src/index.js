import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'
import ytSearch from 'youtube-api-search'
import VideoList from './components/video_list'

const api_key='AIzaSyBQizGVtr1bcDiYAb4kgTglG-BfYkHSrtk';

ytSearch({key:api_key, term:'surfboard'}, (data)=>{
    console.log(data);
} )

// create component
// it should produce some html



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        ytSearch({key:api_key, term:'surfboard'}, (videos)=>{
            this.setState({videos})
            // this.setState({videos:data})
        } )
    }

    render()
    {
        return (<div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

// take this code output i.e  html and put it on dom html

ReactDOM.render(<App/>, document.querySelector('.container'));