import React from 'react';

const VideoListItems = (props) => {
  const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
     <a onClick = {() => props.onVideoSelect(video)} className='list-group-item list-group-item-action'>
       <div className='video-list media'>
         <div className='media-left'>
           <img className='media-object' src={imageUrl}/>
         </div>

         <div className='media-body'>
           <div className='media-heading'>{title}</div>
         </div>
       </div>
     </a>
     );
}

export default VideoListItems;
