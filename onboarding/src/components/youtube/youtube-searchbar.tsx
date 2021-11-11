import "../../app.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import useVideoStore from "../../youtube-store";
import { IYoutubeItem } from "./youtube-main";
import searchYouTube from "../../services/youtube.service";

const YouTubeSearch = () => {
  //   const [query, setQuery] = useState<string>("Web Development");
  // const [youtubeResults, setYoutubeList] = useState<IYoutubeItem[]>([]);

  // const search = (e: any) => {
  //   e.preventDefault();
  //   searchYouTube(query).then(setYoutubeList);
  // };

  return (
    <>
      {/* <div>
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
      {/* </form>
      </div> */}
    </>
  );
};

export default YouTubeSearch;
