import "../../app.css";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../list-store";

function LinkListItem({
  text,
  isFavorite,
  index,
}: ListItemType & { index: number }) {
  const toggleStarred = useListStore(
    (state: LinkState) => state.toggleFavorite
  );
  const remove = useListStore((state: LinkState) => state.removeLink);
  return (
    <div className="linkListItem">
      <p>
        <HighlightOffIcon
          className="deleteIcon"
          color="error"
          onClick={() => remove(index)}
        />
        {text}
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
