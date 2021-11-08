import "../../app.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import useVideoStore from "../../youtube-store";

const YouTubeSearch = () => {
  const [video, setVideo] = React.useState<string>("");
  const add = useVideoStore((state) => state.addVideo);

  return (
    <>
      <div className="youtube">
        <h3>Youtube Search Bar</h3>

        <label>
          <input
            className="input"
            placeholder="add your link / article"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />

          <AddCircleIcon
            className="yellow"
            color="inherit"
            onClick={() => {
              if (video) {
                add(video);
                setVideo("");
              }
            }}
          />
        </label>
      </div>
    </>
  );
};

export default YouTubeSearch;
