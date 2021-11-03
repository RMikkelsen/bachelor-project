import "../../app.css";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";

const LinkList = () => {
  return (
    <div className="linklist">
      <h3>Documentation / Links</h3> <br />
      <LinkInput />
      <LinkListItem id={1} text={"Official React Documentation"} />
      <LinkListItem id={2} text={"Official Typescript Documentation"} />
      <LinkListItem id={3} text={"Article on State Managment"} />
      <LinkListItem id={4} text={"Something else here important"} />
    </div>
  );
};
export default LinkList;
