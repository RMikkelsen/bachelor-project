import "../../app.css";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../list-store";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";

const LinkList = () => {
  const links = useListStore((state: LinkState) => state.links);

  const favorites = useListStore((state: LinkState) => state.filterFavorite);
  console.log(favorites);

  return (
    <>
      <div className="linklist">
        <h3>Documentation / Links</h3>
        <button onClick={(e) => favorites(1)}> Button</button>

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
