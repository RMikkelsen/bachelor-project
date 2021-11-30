import "../../app.css";
import useVideoStore, { Video, VideoState } from "../../youtube-store";

import YouTubeVideoItem from "./youtube-video-item";

const YouTubeVideos = () => {
  let videos = useVideoStore((state: VideoState) => state.videos);

  console.log(videos);

  return (
    <div>
      {videos.map((youtubeVideo) => (
        <>
          <p>{youtubeVideo.title}</p>
          <img
            className="thumbnail"
            alt="pic here"
            src={youtubeVideo.bestThumbnail.url}
          />
          <YouTubeVideoItem video={""} index={0} />
        </>
        // <YouTubeVideoItem
        //   video={video}
        //   isFavorite={isFavorite}
        //   index={index}
        //   key={`item-${video}-${index}`}
        // />
      ))}
    </div>
  );
};
export default YouTubeVideos;
