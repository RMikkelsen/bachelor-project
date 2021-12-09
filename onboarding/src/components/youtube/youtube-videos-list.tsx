import "../../app.css";
import useVideoStore, { VideoState } from "../../stores/youtube-store";

import YouTubeVideoItem from "./youtube-video-item";

const YouTubeVideos = () => {
  let videos = useVideoStore((state: VideoState) => state.videos);

  console.log(videos);

  return (
    <div className="savedYouTube">
      {videos.map((youtubeVideo, index) => (
        <>
          <div className="youtubeBlockSaved">
            <a
              href={youtubeVideo.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {youtubeVideo.title}
            </a>
            <ul className="left">
              <li>
                By:{" "}
                <a href={youtubeVideo.author.ref}>{youtubeVideo.author.name}</a>
              </li>
              <li>Duration: {youtubeVideo.duration}</li>
              <li>Views: {youtubeVideo.views}</li>
              <li>UpLoaded: {youtubeVideo.uploadedAt}</li>
            </ul>
            <ul className="right">
              <img
                className="thumbnail"
                src={youtubeVideo.bestThumbnail.url}
                alt="thumbnail"
              />
            </ul>
            <YouTubeVideoItem video={""} index={index} />
          </div>
        </>
      ))}
    </div>
  );
};
export default YouTubeVideos;
