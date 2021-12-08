import "../../app.css";
import useVideoStore, { Video, VideoState } from "../../stores/youtube-store";

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
              // style={{ width: "50px", overflow: "hidden" }}
              href={youtubeVideo.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <YouTubeVideoItem video={youtubeVideo.title} index={index} />
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
          </div>
        </>
      ))}
    </div>
  );
};
export default YouTubeVideos;
