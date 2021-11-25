import "../../app.css";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../list-store";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";
import StarsIcon from "@mui/icons-material/Stars";

const LinkList = () => {
  const links = useListStore((state: LinkState) => state.links);

  const favorites = useListStore((state: LinkState) => state.filterFavorite);
  console.log(links);

  return (
    <>
      <div className="linklist">
        <h3>Documentation / Links</h3>

        <div className="filterButton ">
          <StarsIcon
            className="starLink1"
            color="inherit"
            onClick={favorites}
          />
          Filter By Favorites
        </div>
        <br />

        <LinkInput />
        {links.map(({ text, isFavorite }: ListItemType, index: number) => (
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
