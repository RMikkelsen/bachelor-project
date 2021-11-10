import React, { FC } from "react";
import StarsIcon from "@mui/icons-material/Stars";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../app.css";
import searchYouTube from "../../services/youtube.service";
import { useState } from "react";

interface IYoutubeItem {
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
  const [query, setQuery] = useState<string>("Web Development");
  //const [list, setList] = useState<string | any>("");
  const [youtubeResults, setYoutubeList] = useState<IYoutubeItem[]>([]);

  const search = (e: any) => {
    e.preventDefault();
    searchYouTube(query).then(setYoutubeList);
  };

  return (
    <div className="youtube">
      <h3>YouTube Video Tutorials</h3>
      <br />
      <form onSubmit={search}>
        <input
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
      {youtubeResults &&
        (youtubeResults.length === 0 ? (
          <p>Search for Tutorials</p>
        ) : (
          <ul className="items">
            {youtubeResults.map((item) => (
              <li className="youtubeBlock" key={item.id}>
                <a href={item.url} rel="noopener noreferrer" target="_blank">
                  {item.title}
                </a>

                <ul>
                  <li>
                    By: <a href={item.author.ref}>{item.author.name}</a>
                  </li>
                  <li>Duration: {item.duration}</li>
                  <li>Views: {item.views}</li>
                  <li>UpLoaded: {item.uploadedAt}</li>
                </ul>
                <img
                  className="thumbnail"
                  src={item.bestThumbnail.url}
                  alt="thumbnail"
                />
                <StarsIcon className="starContact" color="inherit" />
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};

export default YouTube;
