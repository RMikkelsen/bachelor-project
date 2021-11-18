import "../../app.css";
import useListStore, {
  ListItem as ListItemType,
  LinkState,
} from "../../list-store";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";

const LinkList = () => {
  const links = useListStore((state: LinkState) => state.links);

  return (
    <div className="linklist">
      <h3>Documentation / Links</h3> <br />
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
  );
};
export default LinkList;
