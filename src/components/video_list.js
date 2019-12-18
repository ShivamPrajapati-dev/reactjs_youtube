import React from 'react';
import VideoListItem from './video_list_items';


const VideoList = (props) => {
   const videoList = props.videos.map((video) => {
     return <VideoListItem
               onVideoSelect = {props.onVideoSelect}
               key = {video.etag}
               video = {video} />;
   });

  return (
    <ul className = 'col-md-4 list-group'>
       {videoList}
    </ul>
  );
}

export default VideoList;
