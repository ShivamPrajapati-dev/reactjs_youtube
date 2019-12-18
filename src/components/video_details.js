import React from 'react';

const VideoDetail = (props) => {

  const video = props.video;
  if(!video){
    return <div>Loading...</div>;
  }
  const title = video.snippet.title;
  const description = video.snippet.description;
  const url =`https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className = 'video-detail col-md-8'>
      <div className = 'embed-responsive embed-responsive-16by9'>
        <iframe className = 'embed-responsive-item' src={url}></iframe>
      </div>
      <div className = 'details'>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
