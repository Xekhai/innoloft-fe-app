import React from 'react';

const Video = ({ product }) => {
  // Extract video ID from YouTube URL
  const videoId = product.video.split('v=')[1];

  return (
    <div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
