import "../../app.css";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../stores/list-store";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";
import StarsIcon from "@mui/icons-material/Stars";
import { useState } from "react";

const LinkList = () => {
  const links = useListStore((state: LinkState) => state.links);
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <>
      <div className="linklist">
        <h3>Documentation / Links</h3>

        <div className="filterButton ">
          <StarsIcon
            className="starLink2"
            color={showFavorites ? "inherit" : "disabled"}
            onClick={() => setShowFavorites(!showFavorites)}
          />
          <p>Toggle Favorites</p>
        </div>

        <LinkInput />
        {links
          .filter((link) => (showFavorites ? link.isFavorite : true))
          .map(({ text, isFavorite }: ListItemType, index: number) => (
            <LinkListItem
              text={text}
              isFavorite={isFavorite}
              index={index}
              key={`item-${text}-${index}`}
            />
          ))}
      </div>
    </>
  );
};
export default LinkList;
//inspired code from Ankur Kedia https://codesandbox.io/s/todo-zustand-react-jbwi0?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.tsx
