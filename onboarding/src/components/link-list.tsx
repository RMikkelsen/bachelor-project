import "../app.css";
import LinkListItem from "./link-list-item";

const LinkList = () => {
  return (
    <div className="linklist">
      <h3>Documentation / Links</h3> <br />
      <LinkListItem id={1} linkName={"Official React Documentation"} />
      <LinkListItem id={2} linkName={"Official Typescript Documentation"} />
      <LinkListItem id={3} linkName={"Article on State Managment"} />
      <LinkListItem id={4} linkName={"Something else here important"} />
    </div>
  );
};
export default LinkList;
