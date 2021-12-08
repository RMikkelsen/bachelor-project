import "../../app.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useListStore from "../../stores/list-store";
import React from "react";

const LinkInput = () => {
  const [text, setText] = React.useState<string>("");
  const add = useListStore((state) => state.addLink);

  return (
    <>
      <label>
        <input
          className="input"
          placeholder="add your link / article"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <AddCircleIcon
          className="yellow"
          color="inherit"
          onClick={() => {
            if (text) {
              add(text);
              setText("");
            }
          }}
        />
      </label>
    </>
  );
};
export default LinkInput;
