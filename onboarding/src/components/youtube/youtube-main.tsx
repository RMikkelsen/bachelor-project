import { FC } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../app.css";
import searchYouTube from "../../services/youtube.service";
import { useState } from "react";
import useVideoStore, { VideoState } from "../../youtube-store";
import React from "react";
import YouTubeVideos from "./youtube-videos-list";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

export interface IYoutubeItem {
  id: string;
  title: string;
  url: string;
  duration: string;
  uploadedAt: string;
  views: string;
  bestThumbnail: {
    url: string;
  };
  author: {
    name: string;
    ref: string;
  };
}

const YouTube: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [youtubeResults, setYoutubeResults] = useState<IYoutubeItem[]>([]);

  const add = useVideoStore((state: VideoState) => state.addVideo);

  const search = (e: any) => {
    e.preventDefault();

    searchYouTube(query).then(setYoutubeResults);
  };

  return (
    <div className="youtube">
      <h3>YouTube Video Tutorials</h3>
      <br />

      <form onSubmit={search}>
        <input
          placeholder="Search for tutorials"
          className="input"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          {" "}
          <AddCircleIcon className="yellow" color="inherit" />
        </button>
      </form>
      <div className="youtubeItems">
        {youtubeResults &&
          (youtubeResults.length === 0 ? (
            <>
              {" "}
              <br />
            </>
          ) : (
            <ul className="scrollable">
              <p>YouTube Results</p>
              {youtubeResults.map((item) => (
                <li className="youtubeBlock" key={item.id}>
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>

                  <ul className="left">
                    <li>
                      By: <a href={item.author.ref}>{item.author.name}</a>
                    </li>
                    <li>Duration: {item.duration}</li>
                    <li>Views: {item.views}</li>
                    <li>UpLoaded: {item.uploadedAt}</li>
                  </ul>
                  <ul className="right">
                    <img
                      className="thumbnail"
                      src={item.bestThumbnail.url}
                      alt="thumbnail"
                    />
                  </ul>
                  <BookmarkAddIcon
                    className="orangeYoutube"
                    color="inherit"
                    onClick={() => {
                      if (item) {
                        add(item);
                        console.log(item);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          ))}

        <YouTubeVideos />
      </div>
    </div>
  );
};

export default YouTube;
