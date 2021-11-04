import { FC } from "react";
import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export type ListItem = {
  id?: string;
  text?: string;
  isFavorite?: boolean;
};

const LinkListItem: FC<ListItem> = ({ id, text }) => {
  return (
    <div className="linkListItem">
      <p>
        <HighlightOffIcon className="deleteIcon" color="error" />
        {id}) {text}
      </p>
      <StarsIcon className="starLink" color="inherit" />
    </div>
  );
};
export default LinkListItem;
