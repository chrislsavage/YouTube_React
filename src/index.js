import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyBf7FYyKawCmz2NcWTESBPnjAJYHcQCLK0'


// create a new component that will produce HTML
//always use class when we have  state
class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: "surfboards"},  (videos) => {
      this.setState ({videos}); //this.setState ({videos: videos})//if same var name
    });
}

  render() {
    return (
    <div>
    <SearchBar />
    <VideoList videos={this.state.videos} />
    </div>
    );
  }
}
//wrap a component in jsx tags to make it an instance
ReactDOM.render(<App />, document.querySelector('.container'));
