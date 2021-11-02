import { FC } from "react";
import "../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";

type ListItemProps = {
  id?: number;
  linkName?: string;
};

const LinkListItem: FC<ListItemProps> = ({ id, linkName }) => {
  return (
    <div className="linkListItem">
      <p>
        {id}) {linkName}
      </p>
      <StarsIcon className="star" color="inherit" />
      <HighlightOffIcon color="error" />
      <AddCircleIcon className="yellow" color="inherit" />
    </div>
  );
};
export default LinkListItem;
