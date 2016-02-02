import React from 'react';
import VideoListItem from './video_list_item'
const VideoList = (props) => {
  const videoItems = props.videos.map ((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
};
// if you refactor this to a class instead of a functional compenent you will have to change it to this.props...
export default VideoList;
