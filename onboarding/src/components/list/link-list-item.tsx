import { FC } from "react";
import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import useStore, { ListItem as ListItemType, LinkState } from "../../store";

// export type ListItem = {
//   id?: string;
//   text?: string;
//   isFavorite?: boolean;
// };

function LinkListItem({
  text,
  isFavorite,
  index,
}: ListItemType & { index: number }) {
  const toggleStarred = useStore((state: LinkState) => state.toggleFavorite);
  const remove = useStore((state: LinkState) => state.removeLink);
  return (
    <div className="linkListItem">
      <p>
        <HighlightOffIcon
          className="deleteIcon"
          color="error"
          onClick={() => remove(index)}
        />
        {/* {id}) {text} */}
      </p>
      <StarsIcon
        className="starLink"
        color="inherit"
        onChange={() => {
          toggleStarred(index);
        }}
      />
    </div>
  );
}
export default LinkListItem;
