import "../../app.css";
import { Checkbox } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import useVideoStore, { Video, VideoState } from "../../youtube-store";

const YouTubeVideoItem = ({
  video,
  isFavorite,
  index,
}: Video & { index: number }) => {
  const remove = useVideoStore((state: VideoState) => state.removeVideo);

  // let toggleStarred = useVideoStore(
  //   (state: VideoState) => state.toggleFavorite
  // );

  return (
    <div className="">
      <p className="">
        <HighlightOffIcon
          className="deleteIcon"
          color="error"
          onClick={() => remove(index)}
        />
        {video}
      </p>

      {/* <Checkbox
        checked={isFavorite}
        onChange={() => {
          toggleStarred(index);
        }}
        value={video}
        icon={<StarsIcon className="starLink1" color="action" />}
        checkedIcon={<StarsIcon className="starLink1" color="inherit" />}
      />  */}
    </div>
  );
};
export default YouTubeVideoItem;
