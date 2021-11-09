import React, { FC } from "react";
import StarsIcon from "@mui/icons-material/Stars";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../app.css";
import axios from "axios";

async function searchYouTube(q: string | number | boolean) {
  q = encodeURIComponent(q);
  const response = await fetch(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "5712da3fc3msh68ecf2ac4b9903ep1c5497jsn27fb0091085a",
      },
    }
  );
  const body = await response.json();
  console.log(body);
  return body.items.filter((item: { type: string }) => item.type === "video");
}

export type YouTubeProps = {
  id?: number;
  url?: string;
  title?: string;
  description?: string;
  // author: {
  //   ref?: string;
  //   name?: boolean;
  // };
  views?: number;
  duration?: boolean | number | string;
  bestThumbnail?: string;
};
// type item = {
//   id: React.Key | null | undefined;
//   url: string | undefined;
//   title:
//     | boolean
//     | React.ReactChild
//     | React.ReactFragment
//     | React.ReactPortal
//     | null
//     | undefined;
// };

const YouTube: FC<YouTubeProps> = ({
  id,
  url,
  title,
  description,
  // author,
  views,
  duration,
  bestThumbnail,
}) => {
  const [query, setQuery] = React.useState<string>("Web Development");
  const [list, setList] = React.useState<string | any>("");

  const search = (e: any) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };

  return (
    <div className="youtube">
      <h3>YouTube Video Tutorials</h3>
      <br />
      <div onSubmit={search}>
        <input
          className="input"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          {" "}
          <AddCircleIcon className="yellow" color="inherit" />
        </button>
      </div>
      {list &&
        (list.length === 0 ? (
          <p>No results</p>
        ) : (
          <ul className="items">
            {list.map(
              (item: {
                id: React.Key | null | undefined;
                url: string | undefined;
                title:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <li className="youtubeBlock" key={item.id}>
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>

                  <ul>
                    <li>
                      {/* {author} */}
                      {/* By: <a href={author.ref}>{author.name}</a> */}
                    </li>

                    <li>Duration: {duration}</li>
                    <li>Views: {views}</li>
                    <li>description: {description}</li>
                  </ul>
                  <img src={bestThumbnail} alt="thumbnail" />
                  <StarsIcon className="starContact" color="inherit" />
                </li>
              )
            )}
          </ul>
        ))}
    </div>
  );
};

export default YouTube;
