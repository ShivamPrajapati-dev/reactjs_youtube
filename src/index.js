import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'example_key';

class App extends React.Component {

   constructor(props) {
     super(props);

     this.state = {videos:[], selectedVideo : null, currentTerm:null};

      this.onTermChange('react js');
   }

   onTermChange(term){
     YTSearch({ key:API_KEY, term:term}, (videos) => {
        this.setState({videos:videos,selectedVideo : videos[0]});
     });
   }


  render() {
    return (
      <div>
          <SearchBar onTermChange={(currentTerm)=>this.onTermChange(currentTerm)}/>
          <VideoDetails video = {this.state.selectedVideo}/>

          <VideoList
            videos = {this.state.videos}
            onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}/>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
