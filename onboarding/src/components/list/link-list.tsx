import "../../app.css";
import useStore, { ListItem as ListItemType, LinkState } from "../../store";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";

const LinkList = () => {
  const links = useStore((state: LinkState) => state.links);

  return (
    <div className="linklist">
      <h3>Documentation / Links</h3> <br />
      <LinkInput />
      {links.map(({ text, isFavorite }: ListItemType, index: number) => (
        <LinkListItem
          text={text}
          isFavorite={isFavorite}
          index={index}
          key={`todo-${text}-${index}`}
        />
      ))}
    </div>
  );
};
export default LinkList;
