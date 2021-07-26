import React from 'react';
import {VideoItem} from './VideoItem';

export const VideoList = ({videos, onVideoSelect}) => {
  const videosList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />
  });

  return (
    <div>
      <div className="ui relaxed divided list">
        {videosList}
      </div>
    </div>
  )
}
