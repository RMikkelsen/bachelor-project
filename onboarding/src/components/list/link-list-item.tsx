import "../../app.css";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../stores/list-store";
import StarsIcon from "@mui/icons-material/Stars";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
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
//inspired code from Ankur Kedia https://codesandbox.io/s/todo-zustand-react-jbwi0?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.tsx
