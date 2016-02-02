import _ from 'loadash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBf7FYyKawCmz2NcWTESBPnjAJYHcQCLK0';


// create a new component that will produce HTML
//always use class when we have  state
class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
};
   this.videoSearch('surfboards');
}



videoSearch(term) {
  YTSearch({key: API_KEY, term: term},  (videos) => {
    this.setState ({
      videos: videos,
      selectedVideo: videos[0],
      }); //this.setState ({videos: videos})//if same var name
    });
  }


  render() {
    const videoSearch = _.debounce((term) { this.videoSearch(term)}, 300)
    return (
    <div>
    <SearchBar onSearchTermChange={videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
      onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos} />
    </div>
    );
  }
}
//wrap a component in jsx tags to make it an instance
ReactDOM.render(<App />, document.querySelector('.container'));
