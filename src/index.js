import React from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'
const api_key=AIzaSyBQizGVtr1bcDiYAb4kgTglG-BfYkHSrtk;

// create component
// it should produce some html



const App=function () {
    return <div>
        <SearchBar/>
    </div>
}

// take this code output i.e  html and put it on dom html

ReactDOM.render(<App/>, document.querySelector('.container'));