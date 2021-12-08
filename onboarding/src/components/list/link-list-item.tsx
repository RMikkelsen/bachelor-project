import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../stores/list-store";
import { Checkbox } from "@mui/material";

function LinkListItem({
  text,
  isFavorite,
  index,
}: ListItemType & { index: number }) {
  const remove = useListStore((state: LinkState) => state.removeLink);

  let toggleStarred = useListStore((state: LinkState) => state.toggleFavorite);

  return (
    <div className="linkListItem">
      <p className="linkText">
        <HighlightOffIcon
          className="deleteIcon"
          color="error"
          onClick={() => remove(index)}
        />
        {text}
      </p>

      <Checkbox
        checked={isFavorite}
        onChange={() => {
          toggleStarred(index);
        }}
        value={text}
        icon={<StarsIcon className="starLink1" color="action" />}
        checkedIcon={<StarsIcon className="starLink1" color="inherit" />}
      />
    </div>
  );
}
export default LinkListItem;
