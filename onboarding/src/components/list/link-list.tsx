import "../../app.css";
import LinkInput from "./link-input";
import LinkListItem from "./link-list-item";

const LinkList = () => {
  return (
    <div className="linklist">
      <h3>Documentation / Links</h3> <br />
      <LinkInput />
      <LinkListItem id={1} linkUrl={"Official React Documentation"} />
      <LinkListItem id={2} linkUrl={"Official Typescript Documentation"} />
      <LinkListItem id={3} linkUrl={"Article on State Managment"} />
      <LinkListItem id={4} linkUrl={"Something else here important"} />
    </div>
  );
};
export default LinkList;
