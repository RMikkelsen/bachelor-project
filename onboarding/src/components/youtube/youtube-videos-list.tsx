import "../../app.css";
import useVideoStore, { Video, VideoState } from "../../youtube-store";

import YouTubeVideoItem from "./youtube-video-item";

const YouTubeVideos = () => {
  let videos = useVideoStore((state: VideoState) => state.videos);

  console.log(videos);

  return (
    <div className="savedYouTube">
      <p>Saved Tutorials</p>
      {videos.map((youtubeVideo) => (
        <div className="youtubeBlockSaved">
          <p>{youtubeVideo.title}</p>
          <img
            className="thumbnail"
            alt="pic here"
            src={youtubeVideo.bestThumbnail.url}
          />
          <YouTubeVideoItem video={""} index={0} />
        </div>
      ))}
    </div>
  );
};
export default YouTubeVideos;
