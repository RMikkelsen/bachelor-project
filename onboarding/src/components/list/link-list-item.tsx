import { FC } from "react";
import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

type ListItemProps = {
  id?: number;
  linkUrl?: string;
};

const LinkListItem: FC<ListItemProps> = ({ id, linkUrl }) => {
  return (
    <div className="linkListItem">
      <p>
        <HighlightOffIcon className="deleteIcon" color="error" />
        {id}) {linkUrl}
      </p>
      <StarsIcon className="starLink" color="inherit" />
    </div>
  );
};
export default LinkListItem;
