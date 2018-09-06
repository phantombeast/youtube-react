import _ from 'lodash';
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'
import ytSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_dtail'
const api_key='AIzaSyBQizGVtr1bcDiYAb4kgTglG-BfYkHSrtk';

// ytSearch({key:api_key, term:'surfboard'}, (data)=>{
//    // console.log(data);
//
// } )

// create component
// it should produce some html



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: [],
        selectedVideo:null
        };

    this.videoSearch('surfboard')
    }
    videoSearch(term){
        ytSearch({key:api_key, term:term}, (videos)=>{
            this.setState({videos:videos,
                selectedVideo: videos[0]
            })
            // this.setState({videos:data})
        } )
    }

    render()
    {
        const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
        return (<div>
                <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo=>{
                        this.setState({selectedVideo})
                    }}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

// take this code output i.e  html and put it on dom html

ReactDOM.render(<App/>, document.querySelector('.container'));