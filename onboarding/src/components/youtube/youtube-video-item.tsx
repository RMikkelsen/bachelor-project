import "../../app.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import useVideoStore, { Video, VideoState } from "../../youtube-store";

const YouTubeVideoItem = ({ video, index }: Video & { index: number }) => {
  const remove = useVideoStore((state: VideoState) => state.removeVideo);

  return (
    <div>
      <HighlightOffIcon
        className="deleteIconYT"
        color="error"
        onClick={() => remove(index)}
      />
      {video}
    </div>
  );
};
export default YouTubeVideoItem;
