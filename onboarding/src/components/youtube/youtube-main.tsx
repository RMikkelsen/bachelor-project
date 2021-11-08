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
  link?: string;
  title?: string;
  description?: string;
  // author: {
  //   ref?: string;
  //   name?: boolean;
  // };
  views?: boolean;
  duration?: boolean | number | string;
  thumbnail?: string;
};

const YouTube: FC<YouTubeProps> = ({
  id,
  link,
  title,
  description,
  // author,
  views,
  duration,
  thumbnail,
}) => {
  const [query, setQuery] = React.useState<any>("Web Development");
  const [list, setList] = React.useState<any[]>([""]);

  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
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
        <button>
          {" "}
          <AddCircleIcon className="yellow" color="inherit" />
        </button>
      </form>
      {list &&
        (list.length === 0 ? (
          <p>No results</p>
        ) : (
          <ul className="items">
            {list.map(
              (item: {
                id: React.Key | null | undefined;
                link: string | undefined;
                title:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                description:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                author: {
                  ref: string | undefined;
                  name:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                };
                views:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                duration:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                uploaded_at:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                thumbnail: string | undefined;
              }) => (
                <li className="youtubeBlock" key={id}>
                  <a href={link}>{title}</a>

                  <ul>
                    {/* <li>
                      {author}
                      By: <a href={author.ref}>{author.name}</a>
                    </li> */}

                    <li>title: {title}</li>
                    <li>Duration: {duration}</li>
                    <li>Views: {views}</li>
                    <li>description: {description}</li>
                  </ul>
                  <img src={thumbnail} alt="thumbnail" />
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
