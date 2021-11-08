import axios from "axios";
import { useEffect } from "react";
import useVideoStore from "../../youtube-store";

export const API = {
  getData: () =>
    axios({
      method: "GET",
      url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
      },
      params: { q: "web+development" },
    }),
};

const YouTubeData = () => {
  const videos = useVideoStore((state) => state.videos);
  const addVideo = useVideoStore((state) => state.addVideo);
  const removeVideo = useVideoStore((state) => state.removeVideo);
  const toggleFavorite = useVideoStore((state) => state.toggleFavorite);

  useEffect(() => {
    const youtubeApi = async () => {
      const videoData = await (
        await fetch(
          "https://youtube-search-results.p.rapidapi.com/youtube-search/"
        )
      ).json();
      addVideo(videoData.results.map((pd: any) => pd.name));
    };

    youtubeApi();
  }, []);

  return (
    <div>
      <ul data-testId="video-list">
        {videos.map((title: any) => (
          <li key={title} data-testId={`video-${title}`}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default YouTubeData;
